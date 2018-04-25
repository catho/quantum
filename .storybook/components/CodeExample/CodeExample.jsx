import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';

const CodeBlock = styled.pre`
  position:relative;
`;

const INDENTATION_LEVEL = 2;

const indentJSON = (json, parentIndent) => {
  if (typeof json === 'object') {
    return JSON.stringify(json, null, INDENTATION_LEVEL)
      .split('\n')
      .join(`\n${parentIndent}${' '.repeat(INDENTATION_LEVEL)}`);
  }

  return '';
};

const renderPropValue = (prop, parentIndent) => {
  if (typeof prop === 'object' && prop instanceof RegExp) {
    return `{${prop}}`;
  }


  const types = {
    function: '{() => ...}',
    string: `"${prop}"`,
    number: `{${prop}}`,
    boolean: `{${prop}}`,
    object: `{${indentJSON(prop, parentIndent)}}`,
    instanceOf: `{${prop}}`,
  };

  return types[typeof prop] || prop;
};

function getProps(props, indentation = ' '.repeat(INDENTATION_LEVEL)) {
  const spaces = `\n  ${indentation}`;
  return Object
    .entries(props)
    .filter(([name, value]) => value && !['style', 'children'].includes(name))
    .map(([prop, value], index) => `${index === 0 && spaces}${prop}=${renderPropValue(value, indentation)}`)
    .join(spaces);
}

const componentToString = (component, state, level = 0) => {
  const indentation = ' '.repeat(level);

  let content;

  if (typeof component === 'object') {
    const { type, props } = component;

    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;
    const childList = Array.isArray(children) ? children : [children];

    content = `${indentation}<${name}${Object.keys(state).length ? `${getProps(state, indentation)}` : ''}`;
    content += children
      ? `>\n${childList.map(child => componentToString(child, child.props, level + INDENTATION_LEVEL)).join('\n')}\n${indentation}</${name}>`
      : `\n${indentation}/>`;
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return `${content}`;
};

const msg = importModules => `import ${'{'} ${importModules} ${'}'} from '@cathodevel/style-guide';\n\n`;


const CodeExample = ({
  component,
  state = component.props,
  code,
  showTitle,
  withImport,
}) => {
  return (
    <React.Fragment>
      {showTitle && <Title>Code</Title>}
      <CodeBlock>
        <Highlight language="javascript" className="highlight">
          {withImport && msg(withImport)}
          { code || componentToString(component, state)}
          <CodeToClipboard code={code} />
        </Highlight>
      </CodeBlock>
    </React.Fragment>
  );
};


CodeExample.defaultProps = {
  code: '',
  showTitle: true,
  withImport: false,
};

CodeExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  code: PropTypes.string,
  showTitle: PropTypes.bool,
  withImport: PropTypes.string,
};

export default CodeExample;
