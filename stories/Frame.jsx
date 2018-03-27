import React from 'react';
import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
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

const Frame = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

export default Frame;
