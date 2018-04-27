import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import Colors from '../Colors';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import theme from '../../theme';
import skins from './skins';

const StyledButton = styled.button`
  border-radius: ${theme.sizes.radius};
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
  padding: 17px 30px;
  text-align: center;
  text-decoration: ${props => (props.link ? 'underline' : 'none')};

  ${theme.mixins.shadow()};
  ${theme.mixins.transition()};

  ${props => props.full && `
    width: 100%;
  `}

  ${props => props.center && `
    display: block;
    margin-left: auto;
    margin-right: auto;
  `}

  ${props => props.disabled && `
    background-color: ${Colors.GREY['50']};
    border: 1px solid ${Colors.GREY['50']};
    box-shadow: none;
    cursor: not-allowed;
    text-color: ${Colors.GREY['900']};
  `}

  ${(props) => {
    const skin = skins(props);
    const borderColor = skin.borderColor || skin.backgroundColor;

    return !props.disabled && `
      background-color: ${skin.backgroundColor};
      border: 1px solid ${borderColor};
      color: ${skin.textColor};

      ${!props.link ? `&:active {
        background: ${darken(0.05, skin.backgroundColor)};
        border-color: ${darken(0.05, borderColor)};
        color: ${darken(0.05, skin.textColor)};
      }` : ''}
    `;
  }}

  @media (max-width: ${SIZES.phone}px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}> { children } </StyledButton>;

Button.defaultProps = {
  center: false,
  disabled: false,
  full: false,
  skin: 'default',
  type: 'button',
  children: 'Catho',
  onClick: () => {},
};

Button.propTypes = {
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  skin: PropTypes.oneOf([
    'primary',
    'secondary',
    'hollow',
    'light',
    'link',
    'default',
  ]),
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
