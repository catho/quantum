import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';

const CodeBlock = styled.pre`
  position: relative;
`;

const INDENTATION_SIZE = 2;

const spaces = size => ' '.repeat(size);

const jsonStr = (json, indentation) => (
  JSON
    .stringify(json, (key, value) => (typeof value === 'function' ? '() => ...' : value), INDENTATION_SIZE)
    .replace(/\n/g, `\n${indentation}${spaces(INDENTATION_SIZE)}`)
);

const renderPropValue = (propValue, indentation) => {
  if (typeof propValue === 'object' && propValue instanceof RegExp) {
    return `{${propValue}}`;
  }

  const types = {
    function: () => '{() => ...}',
    string: prop => `"${prop}"`,
    number: prop => `{${prop}}`,
    boolean: prop => `{${prop}}`,
    object: prop => `{${jsonStr(prop, indentation)}}`,
    instanceOf: prop => `{${prop}}`,
  };

  const fn = types[typeof propValue];

  return fn ? fn(propValue) : propValue;
};

function getProps(props, indentation) {
  const breakline = `\n${indentation}${spaces(INDENTATION_SIZE)}`;

  return Object
    .entries(props)
    .filter(([name, value]) => value && !['style', 'children'].includes(name))
    .map(([prop, value], index) => `${index === 0 ? breakline : ''}${prop}=${renderPropValue(value, indentation)}`)
    .join(breakline);
}

const componentToString = (component, state, level = 0) => {
  let content;
  const indentation = spaces(level);

  if (typeof component === 'object') {
    const { type, props } = component;

    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;
    const childList = Array.isArray(children) ? children : [children];

    content = `${indentation}<${name}${Object.keys(state).length ? getProps(state, indentation) : ''}`;
    content += children
      ? `>\n${childList.map(child => componentToString(child, child.props, level + INDENTATION_SIZE)).join('\n')}\n${indentation}</${name}>`
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
}) => (
  <React.Fragment>
    {showTitle && <Title>Code</Title>}
    <CodeBlock>
      <Highlight language="javascript" className="highlight">
        {withImport && msg(withImport)}
        { code || componentToString(component, state || component.props)}
        <CodeToClipboard code={code} />
      </Highlight>
    </CodeBlock>
  </React.Fragment>
);

CodeExample.defaultProps = {
  code: '',
  showTitle: true,
  withImport: false,
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
