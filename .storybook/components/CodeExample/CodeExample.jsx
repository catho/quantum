import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';

const CodeBlock = styled.pre`
  position: relative;
  background-color: #f6f8fa;
  padding: 10px;
  font-size: 14px;
`;

const formatJSON = (key, value) => {
  if (typeof value === 'function') return '() => {}';
  if (typeof value === 'string') return `'${value}'`;

  return value;
};

const INDENTATION_SIZE = 2;
const spaces = size => ' '.repeat(size);
const jsonStr = (json, indentation) => (
  JSON
    .stringify(json, formatJSON, INDENTATION_SIZE)
    .replace(/\n/g, `\n${indentation}${spaces(INDENTATION_SIZE)}`)
    .replace(/"/g, '')
);

const renderPropValue = (propValue, indentation) => {
  if (typeof propValue === 'object' && propValue instanceof RegExp) {
    return `{${propValue}}`;
  }

  const types = {
    function: () => '{() => {}}',
    string: prop => `"${prop}"`,
    number: prop => `{${prop}}`,
    object: prop => `{${jsonStr(prop, indentation)}}`,
    instanceOf: prop => `{${prop}}`,
  };

  const fn = types[typeof propValue];

  return fn ? fn(propValue) : propValue;
};

function getProps(props, indentation) {
  const breakline = `\n${indentation}${spaces(INDENTATION_SIZE)}`;

  return Object.entries(props)
    .filter(([name, value]) => value && !['style', 'children'].includes(name))
    .map(([prop, value], index) => {
      const propText = (typeof value === 'boolean') ? prop : `${prop}=${renderPropValue(value, indentation)}`;

      return `${index === 0 ? breakline : ''}${propText}`;
    }).join(breakline);
}

const componentToString = (component, state, level = 0) => {
  let content;
  const indentation = spaces(level);

  if (typeof component === 'object') {
    const { type, props } = component;
    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;

    content = `${indentation}<${name}${Object.keys(state).length ? getProps(state, indentation) : ''}`;
    content += children
      ? `>\n${React.Children.map(children, (child => componentToString(child, child.props, level + INDENTATION_SIZE))).join('\n')}\n${indentation}</${name}>`
      : `\n${indentation}/>`;
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return content;
};

const msg = importModules => `import ${'{'} ${importModules} ${'}'} from '@cathodevel/style-guide';\n\n`;

const CodeExample = ({
  component,
  state,
  code,
  showTitle,
  withImport,
}) => {
  const codeStr = code || componentToString(component, state || component.props);

  return (
    <React.Fragment>
      {showTitle && <Title>Code</Title>}
      <CodeBlock>
        {withImport && msg(withImport)}
        { codeStr }
        <CodeToClipboard code={codeStr} />
      </CodeBlock>
    </React.Fragment>
  );
};

CodeExample.defaultProps = {
  code: '',
  showTitle: true,
  withImport: '',
  state: null,
};

CodeExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  state: PropTypes.instanceOf(Object),
  code: PropTypes.string,
  showTitle: PropTypes.bool,
  withImport: PropTypes.string,
};

export default CodeExample;
