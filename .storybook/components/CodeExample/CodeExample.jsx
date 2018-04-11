import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPalette from '../../../components/Colors';
import CodeToClipboard from '../CodeToClipboard';

const CodeBlock = styled.pre`
  position:relative;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITE};
  margin-top: 0;
`;

const renderPropValue = (prop) => {
  const types = {
    function: '{() => ...}',
    string: `"${prop}"`,
    number: `{${prop}}`,
    boolean: `{${prop}}`,
    object: `{${JSON.stringify(prop)}}`,
  };

  return types[typeof prop] || prop;
};

const getProps = (props) => {
  const indentation = new Array(3).join(' ');

  return Object
    .entries(props)
    .map(([prop, value]) => `${prop}=${renderPropValue(value)}`)
    .join(`\n${indentation}`);
};

const componentToString = (component, level = 0) => {
  const indentation = new Array(3 * level).join(' ');

  let content;

  if (typeof component === 'object') {
    const { type } = component;
    const { defaultProps } = type;
    const name = type.displayName || type.name || type;
    const children = component.props ? component.props.children : null;

    content = `${indentation}<${name}${defaultProps ? `\n  ${getProps(defaultProps)}` : ''}`;
    content += children ? `>\n${componentToString(children, level + 1)}\n${indentation}</${name}>` : ' />';
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return `${content}`;
};

const CodeExample = ({ component, code = componentToString(component) }) => (
  <React.Fragment>
    <h2>Code</h2>
    <CodeBlock>
      {code}
      <CodeToClipboard code={code} />
    </CodeBlock>
  </React.Fragment>
);

CodeExample.propTypes = {
  component: PropTypes.func.isRequired,
  code: PropTypes.string,
};

export default CodeExample;
