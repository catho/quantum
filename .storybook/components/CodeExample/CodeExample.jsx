import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorPalette from '../../../components/Colors';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';

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
  if (typeof prop === 'object' && prop instanceof RegExp) {
    return `{${prop}}`;
  }

  const types = {
    function: '{() => ...}',
    string: `"${prop}"`,
    number: `{${prop}}`,
    boolean: `{${prop}}`,
    object: `{${JSON.stringify(prop, null, 2)}}`,
    instanceOf: `{${prop}}`,
  };

  return types[typeof prop] || prop;
};

const getProps = (props) => {
  const indentation = new Array(3).join(' ');

  return Object
    .entries(props)
    .filter(([, value]) => value)
    .map(([prop, value]) => `${prop}=${renderPropValue(value)}`)
    .join(`\n${indentation}`);
};

const componentToString = (component, state, level = 0) => {
  const indentation = new Array(3 * level).join(' ');

  let content;

  if (typeof component === 'object') {
    const { type, props } = component;
    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;

    content = `${indentation}<${name}${state ? `\n  ${getProps(state)}` : ''}`;
    content += children ? `>\n${componentToString(children, state, level + 1)}\n${indentation}</${name}>` : ' />';
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return `${content}`;
};

/* eslint-disable */
const CodeExample = ({ component, state, code = componentToString(component, state) }) => (
  <React.Fragment>
    <Title>Code</Title>
    <CodeBlock>
      {code}
      <CodeToClipboard code={code} />
    </CodeBlock>
  </React.Fragment>
);

CodeExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  code: PropTypes.string,
};
/* eslint-enable */

export default CodeExample;
