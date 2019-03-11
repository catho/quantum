import { createGlobalStyle } from 'styled-components';
import Colors from '../../Colors';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,600i,700');

  * {
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1.5;
  }

  body {
    font-size: 16px;
    letter-spacing: 0.2px;
    color: ${Colors.BLACK[700]}
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
  }
`;

export default Typography;
