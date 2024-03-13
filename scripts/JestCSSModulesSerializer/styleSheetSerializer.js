const css = require('@adobe/css-tools');
const path = require('path');
const fs = require('fs');

const cache = new WeakSet();

const getCSSFromTempFolder = () => {
  const cssFile = path.resolve('./.temp/index.css');
  if (!fs.existsSync(cssFile)) {
    throw new Error(
      `\n\n CSS file not found in temporary folder: ${cssFile} \n\n`,
    );
  }
  const cssFileContent = fs.readFileSync(cssFile, {
    encoding: 'utf8',
  });
  return css.parse(cssFileContent);
};

const getNodes = (node, nodes = []) => {
  if (typeof node === 'object') {
    nodes.push(node);
  }

  if (node.children) {
    Array.from(node.children).forEach((child) => getNodes(child, nodes));
  }

  return nodes;
};

const getClassNamesFromDOM = (node) => Array.from(node.classList);

const getClassNamesFromProps = (node) => {
  const classNameProp =
    node.props && (node.props.class || node.props.className);

  if (classNameProp) {
    return classNameProp.trim().split(/\s+/);
  }

  return [];
};

const getClassNames = (nodes) =>
  nodes.reduce((classNames, node) => {
    let newClassNames = null;

    if (global.Element && node instanceof global.Element) {
      newClassNames = getClassNamesFromDOM(node);
    } else {
      newClassNames = getClassNamesFromProps(node);
    }

    newClassNames.forEach((className) => classNames.add(className));

    return classNames;
  }, new Set());

const includesClassNames = (classNames, selectors) =>
  classNames.some((className) =>
    selectors.some((selector) => selector.includes(className)),
  );

const includesUnknownClassNames = (classNames, selectors) =>
  !selectors
    .flatMap((selector) => selector.split(' '))
    .every((chunk) =>
      classNames.some((className) => chunk.includes(className)),
    );

const filterRules = (classNames) => (rule) =>
  rule.type === 'rule' &&
  !includesUnknownClassNames(classNames, rule.selectors) &&
  includesClassNames(classNames, rule.selectors) &&
  rule.declarations.length;

const getAtRules = (ast, filter) =>
  ast.stylesheet.rules
    .filter((rule) => rule.type === 'media' || rule.type === 'supports')
    .reduce((acc, atRule) => {
      // eslint-disable-next-line no-param-reassign
      atRule.rules = atRule.rules.filter(filter);
      return acc.concat(atRule);
    }, []);

const getStyle = (classNames, config = {}) => {
  const ast = getCSSFromTempFolder();
  const filter = filterRules(classNames);
  const rules = ast.stylesheet.rules.filter(filter);

  const atRules = getAtRules(ast, filter);
  ast.stylesheet.rules = rules.concat(atRules);

  return css.stringify(ast, { indent: config.indent });
};

const serializerOptionDefaults = {
  addStyles: true,
};
let serializerOptions = serializerOptionDefaults;

module.exports = {
  /**
   * @param {{ addStyles?: boolean }} options
   */
  setStyleSheetSerializerOptions(options = {}) {
    serializerOptions = {
      ...serializerOptionDefaults,
      ...options,
    };
  },

  test(val) {
    return (
      val &&
      !cache.has(val) &&
      (val.$$typeof === Symbol.for('react.test.json') ||
        (global.Element && val instanceof global.Element))
    );
  },

  serialize(val, config, indentation, depth, refs, printer) {
    const nodes = getNodes(val);
    nodes.forEach(cache.add, cache);

    const classNames = [...getClassNames(nodes)];

    const style = getStyle(classNames, config);
    const code = printer(val, config, indentation, depth, refs);

    const result = serializerOptions.addStyles
      ? `${style}${style ? '\n\n' : ''}${code}`
      : code;
    nodes.forEach(cache.delete, cache);
    return result;
  },
};
