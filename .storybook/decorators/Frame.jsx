import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { setOptions } from '@storybook/addon-options';

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

  .highlight {
    padding: 20px !important;
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
