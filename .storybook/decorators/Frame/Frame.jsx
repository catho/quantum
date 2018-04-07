import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import ColorPalette from '../../../components/Colors';
import 'semantic-ui-css/semantic.min.css';

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
    background-color: ${ColorPalette.NEUTRAL.GRAY.WHITETWO};
    padding: 2px 5px;
  }

  .highlight {
    padding: 20px !important;
  }

  h1{
    background-color
  }

  h2 {
    border-bottom: 1px solid ${ColorPalette.NEUTRAL.GRAY.WHITETHREE};
    padding-bottom: 8px;
    font-weight: normal;
    margin:10 0;
  }

  h3 {
    margin-top: 40px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      font-size: 14px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: ${ColorPalette.NEUTRAL.GRAY.WHITETWO};
    }
  }
`;

const Frame = (storyFn) => (
  <React.Fragment>
    <Container>
      { storyFn() }
    </Container>
  </React.Fragment>
);

export default Frame;
