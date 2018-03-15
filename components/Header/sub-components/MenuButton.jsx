import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const MenuButton = ({ handleMenuOpen, menuOpened }) => (
  <Hamburger onClick={handleMenuOpen} className={menuOpened}>
    <TopBread />
    <Meat />
    <BottomBread />
  </Hamburger>
);

MenuButton.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  menuOpened: PropTypes.string,
};

MenuButton.defaultProps = {
  menuOpened: null,
};

const Hamburger = styled.div`
  cursor: pointer;
  height: 20px;
  margin-right: 10px;
  position: relative;
  width: 20px;
`;

const SharedSpanStyle = css`
  background: #333;
  border-radius: 9px;
  display: block;
  height: 2px;
  left: 0;
  opacity: 1;
  position: relative;
  transform: rotate(0deg);
  transition: 0.7s ease-in-out;
  width: 100%;
`;

const TopBread = styled.span`
  ${SharedSpanStyle}
  top: 1px;

  .opened > & {
    top: 10px;
    transform: rotate(135deg);
  }
`;

const Meat = styled.span`
  ${SharedSpanStyle}
  top: 7px;

  .opened > & {
    opacity: 0;
    width:0%;
  }
`;

const BottomBread = styled.span`
  ${SharedSpanStyle}
  top: 13px;

  .opened > & {
    top: 6px;
    transform: rotate(-135deg);
  }
`;

export default MenuButton;
