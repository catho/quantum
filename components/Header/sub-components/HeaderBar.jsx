import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Container, BREAKPOINTS } from '../../Grid';

const HeaderContainer = styled(Container)`
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props => props.theme.paddingTop};
  padding-bottom: ${props => props.theme.paddingBottom};

  @media (max-width: 980px) {
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.secondaryColor};
  }
`;

const StyledContainer = styled(Container)`
  padding: 0;
`;

const LinkList = styled.ul`
  font-size: ${props => props.theme.fontSize};
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    color: ${props => props.theme.secondaryColor};
  }
`;

const LinkListItem = styled.li`
  color: ${props => props.theme.secondaryColor};
  margin-right: 25px;

  &:first-child, &:last-child {
    list-style-type: none;
  }

  &:last-child {
    margin-left: auto;
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.primaryColor};
  font-size: ${props => props.theme.linkFontSize};
  font-family: ${props => props.theme.fontFamily};
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }

  &.selected {
    font-weight: bold;
    cursor: default;
  }

  display: flex;

  img{
    margin-top:-2px;
    margin-left:6px;
  }

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    color: ${props => props.theme.secondaryColor};
`;

const HeaderBar = ({ data, path }) => (
  <ThemeProvider theme={data.theme}>
    <HeaderContainer fluid>
      <StyledContainer>
        <LinkList>
          {
            data.links.map(link => (
              <LinkListItem key={link.id}>
                <Link href={link.href} className={path === link.href ? 'selected' : ''}>
                  { link.text }
                  {
                    (link.img) &&
                    <img
                      alt={link.text}
                      src={`${process.env.APPLICATION_PATH}/static/${link.img.src}`}
                      width={link.img.width}
                      height={link.img.height}
                    />
                  }
                </Link>
              </LinkListItem>
            ))
          }
        </LinkList>
      </StyledContainer>
    </HeaderContainer>
  </ThemeProvider>
);

HeaderBar.propTypes = { data: PropTypes.instanceOf(Object), path: PropTypes.string.isRequired };
HeaderBar.defaultProps = { data: null };

export default HeaderBar;
