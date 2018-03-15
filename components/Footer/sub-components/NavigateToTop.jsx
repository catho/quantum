import React from 'react';
import styled from 'styled-components';
import { Container, Col } from '../../Grid';

const TopButtonHolder = styled(Col)`{
  text-align: right;
  padding: 10px;
  a{
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fontSize};
    &::before {
      content: '\\25b2';
      padding-left: 0.5em;
    }
  }
}`;

const NavigateToTop = () => (
  <Container hide={['desktop', 'tablet', 'phone']}>
    <TopButtonHolder desktop={12}>
      <a href="#top">Topo</a>
    </TopButtonHolder>
  </Container>
);

export default NavigateToTop;
