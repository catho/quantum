import 'semantic-ui-css/components/reset.css';
import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/transition.css';

import React from 'react';
import styled, { injectGlobal } from 'styled-components';

const Container = styled.div`
  padding: 10px 20px;
`;

injectGlobal`
  @font-face {
    font-family: Introbook;
    src: url('https://static.catho.com.br/vendor/webcomponents-font/intro/book/introBook.woff');
  }

  @font-face {
    font-family: Montserrat;
    src: url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }

  *:focus {
    outline: none;
  }

  pre {
    margin-bottom: 0;
  }

  code {
    background-color: #f6f8fa;
    padding: 2px 5px;
  }

  .highlight {
    padding: 20px !important;
  }

  h1, h4 {
    font-weight: 300;
    margin-top: 40px;
  }

  p {
    font-weight: 300;
    strong {
      font-weight: 400;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    &.bordered {
      th, td {
        border: 1px solid #ccc;
      }
    }

    th, td {
      padding: 8px;
      font-size: 14px;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #f6f8fa;
    }
  }
`;

const Frame = storyFn => (
  <React.Fragment>
    <Container>
      { storyFn() }
    </Container>
  </React.Fragment>
);

export default Frame;
