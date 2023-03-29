import { createGlobalStyle } from 'styled-components';
import { colors } from '../../shared/theme';
import { query } from '../../Grid/sub-components/shared';
import { BREAKPOINTS } from '../../shared';

const mediaQueries = query(BREAKPOINTS);

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
  font-size: 36px;
  letter-spacing: 0.25px;

  ${mediaQueries.medium`
    letter-spacing: 0.72px;
    font-size: 48px;
  `}
}

h2 {
  font-size: 32px;
  letter-spacing: 0.24px;

  ${mediaQueries.medium`
    font-size: 36px;
    letter-spacing: 0.54px;
  `}
}

h3 {
  font-size: 28px;
  letter-spacing: 0.3px;

  ${mediaQueries.medium`
    letter-spacing: 0.42px;
  `}
}

h4 {
  font-size: 24px;
  letter-spacing: 0.24px;

  ${mediaQueries.medium`
    letter-spacing: 0.36px;
  `}
}

h5 {
  font-size: 20px;
  letter-spacing: 0.2px;

  ${mediaQueries.medium`
    letter-spacing: 0.3px;
  `}
}

h6 {
  font-size: 18px;
  letter-spacing: 0.18px;

  ${mediaQueries.medium`
    letter-spacing: 0.27px;
  `}
}

ul, ol {
  margin: 0;
  padding-left: 18px;
}`;

const Typography = () => (
  <>
    <Style />

    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,400i,600i,700i&display=swap"
      as="font"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,400i,600i,700i&display=swap"
      rel="stylesheet"
    />
  </>
);

export default Typography;
