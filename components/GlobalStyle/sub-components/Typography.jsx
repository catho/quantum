import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors } from '../../shared/theme';
import isSSR from '../../shared/isSSR';

const Style = createGlobalStyle`
* {
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.5;
}

body {
  font-size: 16px;
  letter-spacing: 0.2px;
  color: ${colors.neutral['700']};
}

svg[data-qtm-preloader="icon"] {
  max-width: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: normal;
}

h1 {
  letter-spacing: 0.7px;
  font-size: 48px;
}

h2 {
  font-size: 36px;
  letter-spacing: 0.5px;
}

h3 {
  font-size: 28px;
  letter-spacing: 0.4px;
}

h4 {
  font-size: 24px;
  letter-spacing: 0.4px;
}

h5 {
  font-size: 20px;
  letter-spacing: 0.3px;
}

h6 {
  font-size: 18px;
  letter-spacing: 0.3px;
}

ul, ol {
  margin: 0;
  padding-left: 18px;
}`;

const NunitoFontFamily = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,400i,600i,700i&display=swap');
`;

const Typography = () => (
  <>
    <Style />
    {isSSR() ? (
      <link
        href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,400i,600i,700i&display=swap"
        rel="stylesheet"
      />
    ) : (
      <NunitoFontFamily />
    )}
  </>
);

export default Typography;
