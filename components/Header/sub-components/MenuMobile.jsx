import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import { Container, Row, Col } from '../../Grid';

const MenuMobile = ({ data, menuOpened }) => (
  <ThemeProvider theme={data.theme}>
    <MenuMobileContainer fluid className={menuOpened}>
      <Row no-gutters>
        {
          data.menu.phone.links.map(link =>
            link.icon && (
              <Col phone={4} key={link.id}>
                <FeaturedListItem>
                  <FeaturedLink icon={link.icon} href={link.href} title={link.text}>
                    {link.text}
                  </FeaturedLink>
                </FeaturedListItem>
              </Col>
            ))
        }
        <LinkList>
          {
            data.menu.phone.links.map(link =>
              !link.icon && (
                <LinkListItem
                  key={link.id}
                  linkTitle={!!link.title}
                >
                  { link.text &&
                    <Link
                      href={link.href}
                      title={link.text}
                      target={link.target}
                    >
                      {link.text}
                    </Link>
                  }
                  {
                    link.title &&
                    link.title
                  }
                </LinkListItem>
            ))
          }
        </LinkList>
      </Row>
    </MenuMobileContainer>
  </ThemeProvider>
);

MenuMobile.propTypes = {
  data: PropTypes.instanceOf(Object),
  menuOpened: PropTypes.string,
};
MenuMobile.defaultProps = {
  data: null,
  menuOpened: null,
};

const MenuMobileContainer = styled(Container)`
  background-color: #FFF;
  box-sizing: border-box;
  font-family: ${props => props.theme.fontFamily};
  font-size: 11px;
  overflow-y: hidden;
  opacity: 1;
  padding: 0;
  position: fixed;
  transition: all 0.6s ease 0s;
  z-index:4;
  height: calc(100vh - 50px);
  top: -100vh;

  &.opened {
    animation: mobileMoveToViewHeight .7s forwards ease .25s;
    overflow-y: scroll;
  }

  &.closed {
    animation: mobileMoveToViewHeightReverse .7s ease-out;
  }

  @keyframes mobileMoveToViewHeightReverse {
    0% { transform: translateY(100vh); }
    100% { transform: translateY(0); }
  }

  @keyframes mobileMoveToViewHeight {
    100% { transform: translateY(100vh); }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const LinkListItem = styled.li`
  border-top: 1px solid #f5f5f5;
  color: #666;

  &:last-child {
    border-top-width: 3px;
  }

  ${props => props.linkTitle && css`
    background: #f5f5f5;
    font-size: 10px;
    height: 20px;
    line-height: 20px;
    text-indent: 20px;
    text-transform: uppercase;
  `}
`;

const Link = styled.a`
  border-left: 2px solid transparent;
  color: #666;
  display: block;
  padding: 18px 18px 17px;
  text-decoration: none;
  transition: all .15s ease-out;

  &:hover {
    border-left-color: #005da4;
  }
`;

const FeaturedListItem = styled.div`
  text-align: center;
  width: 100%;
`;

const FeaturedLink = styled.a`
  border-bottom: 2px solid transparent;
  color: #666;
  display: block;
  height: 125px;
  padding-top: 15px;
  text-decoration: none;
  transition: all .15s ease-out;

  &:hover {
    border-bottom-color: #005da4;
  }

  &:before {
    background: #005da4;
    border-radius: 50%;
    color: #fff;
    display: block;
    font-family: cathoIconFontB2c;
    font-smoothing: antialiased;
    font-size: 30px;
    font-weight: 400;
    height: 36px;
    width: 36px;
    left: 50%;
    line-height: 35px;
    margin-bottom: 15px;
    padding: 10px;
    position: relative;
    transform: translateX(-50%);
  }

  ${props => props.icon === 'search' && css`
    &:before {
      content: 'I';
    }
  `}

  ${props => props.icon === 'enterprise' && css`
    &:before {
      content: 'D';
    }
  `}

  ${props => props.icon === 'alert' && css`
    &:before {
      content: 'K';
    }
  `}
`;

export default MenuMobile;
