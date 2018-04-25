import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';

/* eslint-disable */
const CodeBlock = styled.pre`
  position:relative;
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

function getProps(props, indentation = new Array(3).join(' ')) {
  return Object
    .entries(props)
    .filter(([name, value]) => value && !['style', 'children'].includes(name))
    .map(([prop, value]) => `${prop}=${renderPropValue(value)}`)
    .join(`\n  ${indentation}`);
}

const componentToString = (component, state, level = 0) => {
  const indentation = new Array(3 * level).join(' ');

  let content;

  if (typeof component === 'object') {
    const { type, props } = component;

    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;

    content = `${indentation}<${name}${Object.keys(state).length ? ` ${getProps(state, indentation)}` : ''}`;
    content += children
      ? Array.isArray(children)
        ? `>\n${children.map(child => componentToString(child, child.props, level + 1)).join('\n')}\n${indentation}</${name}>`
        : `>\n${componentToString(children, children.props, level + 1)}\n${indentation}</${name}>`
      : ' />';
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return `${content}`;
};

const msg = importModules => `import ${'{'} ${importModules} ${'}'} from '@cathodevel/style-guide';\n\n`;


const CodeExample = ({ component, state = component.props, code = componentToString(component, state), showTitle = true, withImport }) => (
  <React.Fragment>
    {showTitle && <Title>Code</Title>}
    <CodeBlock>
      <Highlight language="javascript" className="highlight">
        {withImport && msg(withImport)}
        {code}
        <CodeToClipboard code={code} />
      </Highlight>
    </CodeBlock>
  </React.Fragment>
);

CodeExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  code: PropTypes.string,
  showTitle: PropTypes.bool,
};
/* eslint-enable */

export default CodeExample;
