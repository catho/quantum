import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  font-size: inherit;
  font-weight: 500;
  height: 40px;
  padding: 0 30px;
  text-align: center;
  text-decoration: none;
  -webkit-user-drag: none;

  ${props => props.full && `
    width: 100%;
  `}

  ${props => props.center && `
    display: block;
    margin-left: auto;
    margin-right: auto;
  `}

  &:not(button) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.disabled,
  &[disabled] {
    &:active,
    &.active,
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background: #F0F0F0;
      border-color: #999;
      box-shadow: none;
      color: $gray;
      cursor: not-allowed;
    }
  }
`;

Button.defaultProps = {
  skin: 'border-alpha',
  onClick: null,
  type: 'button'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  skin: PropTypes.oneOf([
    'border-alpha',
    'solid-alpha',
    'solid-beta',
    'solid-white',
    'link'
  ]),
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button;
