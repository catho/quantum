import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../Grid';

const LinkList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.linkFontSize};
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  align-items: center;
  border-bottom: ${props => props.theme.menuHover.borderSize} solid transparent;
  color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  display: flex;
  position: relative;

  &:hover {
    border-bottom: ${props => props.theme.menuHover.borderSize} solid ${props => props.theme.menuHover.borderColor};

    ul {
      visibility: visible;
      opacity: 1;
    }
  }

  &:last-child {
    margin-left: 10px;

    &:hover {
      border-bottom:${props => props.theme.menuHover.borderSize} solid transparent;
    }
  }
`;

const Link = styled.a`
  color: ${props => props.theme.primaryColor};
  font-size: 16px;
  text-decoration: none;

  &.selected {
    cursor: default;
    color: ${props => props.theme.tertiaryColor};
    font-weight: bold;
  }

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    font-size:11px;
  }
`;

const Button = styled.button`
  background-color: #FFF;
  border: 1px solid #CCC;
  border-bottom-color: ${props => (props.loginOpened ? '#FFF' : '#CCC')};
  color: #666;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 15px;
  z-index: 2;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    font-size:11px;
  }
`;

const LoginFrame = styled.div`
  background-color: #FFF;
  border:1px solid #CCC;
  opacity: ${props => (props.loginOpened ? '1' : '0')};
  overflow: hidden;
  position: absolute;
  right: 0px;
  top: 52px;
  transition: all 0.1s ease-out;
  visibility: ${props => (props.loginOpened ? 'visible' : 'hidden')};
  width: 240px;
  z-index: 1;

  @media (max-width: ${BREAKPOINTS.desktop}px) {
    top: 50px;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    top: 40px;
  }

  iframe {
    height: 190px;
  }
`;

const LoginBox = ({ handleLoginOpen, loginOpened }) => (
  <LinkList>
    <ListItem>
      <Link href="https://seguro.catho.com.br/inclusao/curriculo.php?nova_inclusao=1&usr%5Bplano_id%5D=1&cur%5Bperfil_id%5D=1&cur%5Buse_personalizado%5D=0&a=0&ppd=0&tipoinclusao=903">
        Assine
      </Link>
    </ListItem>

    <ListItem>
      <Button onClick={handleLoginOpen} loginOpened={loginOpened}>
        Login
      </Button>

      <LoginFrame loginOpened={loginOpened}>
        <iframe src="https://safe.catho.com.br/login/tipo/tooltip/" frameBorder="0" scrolling="no" title="LoginBox" />
      </LoginFrame>
    </ListItem>
  </LinkList>
);

LoginBox.propTypes = {
  handleLoginOpen: PropTypes.func.isRequired,
  loginOpened: PropTypes.bool,
};

LoginBox.defaultProps = {
  loginOpened: false,
};

export default LoginBox;
