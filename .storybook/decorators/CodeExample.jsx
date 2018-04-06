import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ColorPalette from '../../components/Colors';

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  color: ${ColorPalette.PRIMARY.BLUE.WINDOWS};

  &:hover {
    color: ${ColorPalette.PRIMARY.BLUE.CORNFLOWER};
  }
`;

const CodeBlock = styled.pre`
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITE};
  border-radius: 3px;
  margin-top: 0;
`

const renderPropValue = prop => {
  const types = {
    function: '{() => ...}',
    string: `"${prop}"`,
    number: `{${prop}}`,
    boolean: `{${prop}}`,
    object: `{${JSON.stringify(prop)}}`,
  };

  return types[typeof prop] || prop;
}

class CodeExample extends React.Component {
  render() {
    const { component: Component } = this.props;

    const component = <Component />;
    const name =  component.type.displayName || component.type.name || component.type;

    const indentation = new Array(3).join(' ');

    const code = `<${name} ${Object
                              .entries(component.props)
                              .map(([prop, value]) => `${prop}=${renderPropValue(value)}`)
                              .join(`\n${indentation}`)} />`;
    return (
      <React.Fragment>
        <h2>Code</h2>

        <CopyToClipboard text={code}>
          <Button>Copy to clipboard</Button>
        </CopyToClipboard>
        <CodeBlock>
          {code}
        </CodeBlock>
      </React.Fragment>
    )
  }
};

export default CodeExample;
