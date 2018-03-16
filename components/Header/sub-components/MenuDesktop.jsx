import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Row, Col, Hide, BREAKPOINTS } from '../../Grid';
import MenuButton from './MenuButton';
import LoginBox from './LoginBox';

const MenuDesktop = ({
  data, handleMenuOpen, handleLoginOpen, menuOpened, loginOpened,
}) => (
  <ThemeProvider theme={data.menu.desktop.theme}>
    <MenuDesktopContainer fluid className={menuOpened}>
      <Container>
        <Row>
          <StyledCol phone={12} tablet={12} desktop={12} className={menuOpened}>
            <MenuNavigation>
              <Hide desktop large hd>
                <MenuButton handleMenuOpen={handleMenuOpen} menuOpened={menuOpened} />
              </Hide>

              <a href="https://www.catho.com.br/">
                <LogoCatho src="https://static.catho.com.br/svg/site/logoCathoB2c.svg" alt="A gente trabalha pelo seu trabalho" />
              </a>

              <StyledHide tablet phone>
                <LinkList>
                  {
                    data.menu.desktop.links.map(link => (
                      <LinkListItem key={link.id}>
                        { !link.collapsedLinkGroup &&
                          <Link href={link.href}>
                            {link.text}
                          </Link>
                        }

                        { link.collapsedLinkGroup &&
                          link.text
                        }

                        { link.collapsedLinkGroup &&
                          <PopOverLinkList>
                            {
                              link.collapsedLinkGroup.map(collapsedlink => (
                                <PopOverLinkListItem key={collapsedlink.id}>
                                  { collapsedlink.text &&
                                    <PopOverLink href={collapsedlink.href}>
                                      { collapsedlink.text }
                                    </PopOverLink>
                                  }
                                  {
                                    collapsedlink.title &&
                                    <PopOverTitle>
                                      { collapsedlink.title }
                                    </PopOverTitle>
                                  }
                                </PopOverLinkListItem>
                              ))
                            }
                          </PopOverLinkList>
                       }

                      </LinkListItem>
                    ))
                  }
                </LinkList>
              </StyledHide>
            </MenuNavigation>
            <LoginBox handleLoginOpen={handleLoginOpen} loginOpened={loginOpened} />
          </StyledCol>
        </Row>
      </Container>
    </MenuDesktopContainer>
  </ThemeProvider>
);

MenuDesktop.propTypes = {
  data: PropTypes.instanceOf(Object),
  handleMenuOpen: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  menuOpened: PropTypes.string,
  loginOpened: PropTypes.bool,
};

MenuDesktop.defaultProps = {
  data: null,
  menuOpened: null,
  loginOpened: false,
};

const MenuDesktopContainer = styled(Container)`
  border-bottom: 1px solid #f4f4f4;
  position: relative;
  padding: 0;

  &.opened {
    height: 50px;
  }
`;

const LogoCatho = styled.img`
  margin: ${props => props.theme.marginLogo};
  max-width: 85px;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    max-width: 55px;
  }
`;

const StyledHide = styled(Hide)`
  display: flex;
  height: 100%;
  width: 100%;
`;

const StyledCol = styled(Col)`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  height: 70px;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    height: 50px;
  }

  &.opened {
    animation: desktopMoveToHeaderBar 0.3s ease, desktopMoveToViewHeight 0.7s forwards ease 0.3s;
  }

  &.closed {
    animation: desktopMoveToViewHeightReverse 0.615s ease-out, desktopMoveToHeaderBarReverse 0.3s forwards ease-in 0.6s;
  }

  @keyframes desktopMoveToHeaderBar {
    0% { transform: translateY(0); }
    100% { transform: translateY(-35px); }
  }

  @keyframes desktopMoveToViewHeight {
    0% { transform: translateY(-35px); }
    100% { transform: translateY(calc(100vh - 50px - 35px)); }
  }

  @keyframes desktopMoveToHeaderBarReverse {
    0% { transform: translateY(-35px); }
    100% { transform: translateY(0); }
  }

  @keyframes desktopMoveToViewHeightReverse {
    0% { transform: translateY(calc(100vh - 50px - 35px)); }
    100% { transform: translateY(-35px); }
  }
`;

const MenuNavigation = styled.div`
  display: flex;
  align-items: center;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.linkFontSize};
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const LinkListItem = styled.li`
  align-items: center;
  border-bottom: ${props => props.theme.menuHover.borderSize} solid transparent;
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
  display: flex;
  margin-right: 20px;
  position: relative;

  &:hover {
    border-bottom: ${props => props.theme.menuHover.borderSize} solid ${props => props.theme.menuHover.borderColor};
    ul {
      visibility: visible;
      opacity: 1;
    }
  }

  &:last-child {
    &:hover {
      border-bottom:${props => props.theme.menuHover.borderSize} solid transparent;
    }
  }

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    font-size:11px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.primaryColor};
  text-decoration: none;

  &.selected {
    cursor: default;
    color: ${props => props.theme.tertiaryColor};
    font-weight: bold;
  }
`;

const PopOverLinkList = styled.ul`
  background-color: #FFF;
  border-top:2px solid #005da4;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.linkFontSize};
  flex-direction: column;
  left: calc(50% - calc(270px/2));
  list-style-type: none;
  margin: 0;
  opacity:0;
  padding:11px 0;
  position: absolute;
  transition:opacity 0.5s ease-out;
  top: 100%;
  visibility: hidden;
  width:285px;
  z-index: 9999;

  &:before {
    color: #005da4;
    content: "\\25b2";
    font-size: 22px;
    left: calc(50% - 12px);
    padding-left: 0;
    position: absolute;
    top: -17px;
    transform: scale(1.5, .7);
    z-index: 0;
  }
`;

const PopOverLinkListItem = styled.li`
  display: flex;
  padding: 4px 0;
`;

const PopOverTitle = styled.span`
  background-color: #f5f5f5;
  font-size: 10px;
  padding: 8px 15px 4px;
  text-transform: uppercase;
  width: 100%;
`;

const PopOverLink = styled.a`
  color: ${props => props.theme.primaryColor};
  padding: 8px 15px;
  text-decoration: none;
  width: 100%;
`;

export default MenuDesktop;
