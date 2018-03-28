import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import 'highlight.js/styles/default.css';

const HowToImport = (storyFn, { story }) => (
  <React.Fragment>
    <Highlight language="javascript" className="highlight">
      import {'{'} { story.replace(' ', '') } {'}'} from '@cathodevel/style-guide';
    </Highlight>
    { storyFn() }
  </React.Fragment>
);

export default HowToImport;
