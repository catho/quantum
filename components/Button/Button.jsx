import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  ${(props) => {
    const {
      unselected,
      selected,
      disabled,
    } = skins(props);

    return `
      background-color: ${props.disabled ? disabled.background : unselected.background};
      border: 1px solid ${props.disabled ? disabled.border : unselected.border};
      color: ${props.disabled ? disabled.color : unselected.color};
      font-weight: ${props.disabled ? disabled.fontWeight : unselected.fontWeight};

      &:active {
        ${theme.mixins.shadow(2)};
        background-color: ${selected.background};
        border-color: ${selected.border};
        color: ${selected.color};
      }
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
    'default',
    'primary',
    'secondary',
    'action',
    'cancel',
    'modal',
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
