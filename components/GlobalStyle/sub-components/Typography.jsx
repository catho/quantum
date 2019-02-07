import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');

  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  h1 {
    line-height: 72px;
    letter-spacing: 0.7px;
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.4px;
  }
  
  h4 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.4px;
  }

  h5 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.3px;
  }

  h6 {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.3px;
  }
`;

export default Typography;
