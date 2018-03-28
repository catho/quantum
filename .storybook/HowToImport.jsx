import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ColorPallete from '../components/Colors';

import 'highlight.js/styles/default.css';

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  color: ${ColorPallete.PRIMARY.BLUE.WINDOWS};

  &:hover {
    color: ${ColorPallete.PRIMARY.BLUE.CORNFLOWER};
  }
`

const HowToImport = (storyFn, { story }) => {

  const msg = `import ${'{'} ${ story.replace(' ', '') } ${'}'} from '@cathodevel/style-guide';`;

  return (
  <React.Fragment>
    <Highlight language="javascript" className="highlight">
      { msg }
    </Highlight>
    <CopyToClipboard text={msg}>
      <Button>Copy to clipboard</Button>
    </CopyToClipboard>
    { storyFn() }
  </React.Fragment>
  )
};

export default HowToImport;
