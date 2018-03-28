import React from 'react';
import { injectGlobal } from 'styled-components';
import { setOptions } from '@storybook/addon-options';

import Heading from './Heading';

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
`;

const options = {
  showAddonPanel: false,
  addonPanelInRight: false,
};

const Frame = (storyFn, { story }) => (
  <React.Fragment>
    <Heading title={story} />
    { setOptions(options) }
    { storyFn() }
  </React.Fragment>
);

export default Frame;
