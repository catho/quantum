import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { BREAKPOINTS } from '../../Grid/sub-components/shared/grid-config';
import { Container } from '../../Grid';

const PromotionContainer = styled(Container)`
  background-color: ${props => props.theme.primaryColor};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
  padding: 25px 10px;
  position: relative;

  color: ${props => props.theme.textColor};

  transition: background-color .2s;

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
  }

  &:after {
    bottom: 0;
    content: "o";
    display: none;
    font-family: cathoIconFontSite;
    height: 16px;
    margin: auto;
    position: absolute;
    right: 16px;
    top: 0;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 1em;
    padding: 15px 80px 15px 10px;

    &:after {
      display: block;
    }

    & * {
      text-decoration: none !important;
    }
  }
`;

const Link = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const PromotionBar = ({ data, children, href }) => (
  <ThemeProvider theme={data.theme}>
    <Link href={href}>
      <PromotionContainer fluid>
        <Container>
          { children }
        </Container>
      </PromotionContainer>
    </Link>
  </ThemeProvider>
);

PromotionBar.propTypes = {
  data: PropTypes.instanceOf(Object),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
};
PromotionBar.defaultProps = { data: null };

export default PromotionBar;
