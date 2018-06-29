import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeToClipboard from '../CodeToClipboard';
import Title from '../Title';
import ComponentHighlight from '../ComponentHighlight';
import Colors from '../../../components/Colors';
import theme from '../../../theme';

const ScrollWrapper = styled.div`
  position: relative;
  padding-top: 30px;
  background-color: ${Colors.SECONDARY['50']};
  box-shadow: 0px 6px 25px 0px ${theme.mixins.hexToRgba(Colors.BLACK, 0.3)};
`;

const CodeBlock = styled.pre`
  position: relative;
  padding: 15px 50px 15px 15px;
  font-size: 14px;

  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.mixins.hexToRgba(Colors.BLACK, 0.3)};
    border-radius: 5px;
  }
`;

const WindowControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
`;

const WindowControl = styled.div`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 10px;
  ${({ color }) => color && `background-color: ${color};`};
`;

const formatJSON = (key, value) => {
  if (typeof value === 'function') return '() => {}';
  if (typeof value === 'string') return `'${value}'`;

  return value;
};

const INDENTATION_SIZE = 2;
const spaces = size => ' '.repeat(size);
const jsonStr = (json, indentation) =>
  JSON.stringify(json, formatJSON, INDENTATION_SIZE)
    .replace(/\n/g, `\n${indentation}${spaces(INDENTATION_SIZE)}`)
    .replace(/"/g, '');

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
      const propText =
        typeof value === 'boolean'
          ? prop
          : `${prop}=${renderPropValue(value, indentation)}`;

      return `${index === 0 ? breakline : ''}${propText}`;
    })
    .join(breakline);
}

const componentToString = (component, state, level = 0) => {
  let content;
  const indentation = spaces(level);

  if (typeof component === 'object') {
    const { type, props } = component;
    const name = type.displayName || type.name || type;
    const children = props ? props.children : null;

    content = `${indentation}<${name}${
      Object.keys(state).length ? getProps(state, indentation) : ''
    }`;
    content += children
      ? `>\n${React.Children.map(children, child =>
          componentToString(child, child.props, level + INDENTATION_SIZE),
        ).join('\n')}\n${indentation}</${name}>`
      : `\n${indentation}/>`;
  } else {
    content = component ? `${indentation}${component}` : '';
  }

  return content;
};

const msg = importModules =>
  `import ${'{'} ${importModules} ${'}'} from '@cathodevel/quantum';\n\n`;

const CodeExample = ({ component, state, code, showTitle, withImport }) => {
  const codeStr =
    code || componentToString(component, state || component.props);

  return (
    <React.Fragment>
      {showTitle && <Title>Code</Title>}
      <ScrollWrapper>
        <WindowControlsWrapper>
          <WindowControl color="#FF5F56" />
          <WindowControl color="#FFBD2E" />
          <WindowControl color="#27C93F" />
        </WindowControlsWrapper>
        <CodeBlock>
          {withImport && msg(withImport)}
          <ComponentHighlight code={codeStr} />
        </CodeBlock>

        <CodeToClipboard
          code={codeStr}
          backgroundColor={Colors.SECONDARY['50']}
        />
      </ScrollWrapper>
    </React.Fragment>
  );
};

CodeExample.defaultProps = {
  code: '',
  showTitle: true,
  withImport: '',
  state: null,
  component: {},
};

CodeExample.propTypes = {
  component: PropTypes.instanceOf(Object),
  state: PropTypes.instanceOf(Object),
  code: PropTypes.string,
  showTitle: PropTypes.bool,
  withImport: PropTypes.string,
};

export default CodeExample;
