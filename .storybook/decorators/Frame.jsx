import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { setOptions } from '@storybook/addon-options';
import ColorPalette from '../../components/Colors';

import Heading from './Heading';

const Container = styled.div`
  padding: 10px 20px;
`;

injectGlobal`
  @font-face {
    font-family: Introbook;
    src: url('https://static.catho.com.br/vendor/webcomponents-font/intro/book/introBook.woff');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Introbook;
  }

  *:focus {
    outline: none;
  }

  pre {
    margin-bottom: 0;
  }

  code {
    background-color: #f9f2f4;
    color: #c7254e;
    padding: 5px;
  }

  .highlight {
    padding: 20px !important;
  }

  h2 {
    border-bottom: 1px solid ${ColorPalette.NEUTRAL.DARKEYGRAY.WARMGREY};
    padding-bottom: 8px;
  }

  h3 {
    margin-top: 40px;
  }
`;

const options = {
  showAddonPanel: false,
  addonPanelInRight: false,
};

const Frame = (storyFn, { story }) => (
  <React.Fragment>
    <Heading title={story} />
    { setOptions(options) }
    <Container>
      { storyFn() }
    </Container>
  </React.Fragment>
);

export default Frame;
