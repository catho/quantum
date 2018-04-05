import React from 'react';
import styled from 'styled-components';
import jsxToString from 'jsx-to-string';
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

const CodeExample = ({ component: Component }) => (
  <React.Fragment>
    <h2>Code</h2>

    <CopyToClipboard text={jsxToString(<Component />)}>
      <Button>Copy to clipboard</Button>
    </CopyToClipboard>
    <CodeBlock>
      {
        jsxToString(<Component />)
      }
    </CodeBlock>
  </React.Fragment>
);

export default CodeExample;
