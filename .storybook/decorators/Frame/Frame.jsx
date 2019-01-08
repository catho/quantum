import 'semantic-ui-css/components/form.css';
import 'semantic-ui-css/components/checkbox.css';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/input.css';
import 'semantic-ui-css/components/transition.css';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  padding: 10px 20px;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400');
  @import url('https://fonts.googleapis.com/css?family=Oxygen');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  body {
    margin: 0;
    padding: 0;
  }

  * {
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

  pre {
    margin: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;

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

  .ui.selection.dropdown {
    min-width: 11em;
    min-height: 1em;
  }
`;

const Frame = storyFn => (
  <React.Fragment>
    <GlobalStyle />
    <Container>{storyFn()}</Container>
  </React.Fragment>
);

export default Frame;
