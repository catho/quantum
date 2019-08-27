/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/display-name */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const IconFont =
  typeof window === 'undefined'
    ? () => (
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block"
          rel="stylesheet"
        />
      )
    : createGlobalStyle`
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');
  `;

export default IconFont;
