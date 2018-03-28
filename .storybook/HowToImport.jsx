import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';

const HowToImport = (storyFn, { story }) => (
  <Highlight language="javascript">
  { console.log(arguments)}
    import { story } from '@cathodevel/style-guide';
  </Highlight>
);

export default HowToImport;
