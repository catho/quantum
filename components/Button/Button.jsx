import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { SIZES } from '../Grid/sub-components/shared/grid-config';
import theme from '../../theme';
import skins from './skins';

const Button = styled.button`
  border-radius: ${theme.sizes.radius};
  cursor: pointer;
  font-size: inherit;
  font-weight: 500;
  height: ${theme.sizes.fieldHeight};
  padding: 0 30px;
  text-align: center;
  text-decoration: ${props => (props.link ? 'underline' : 'none')};

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
    const skin = skins(props);
    const borderColor = skin.borderColor || skin.backgroundColor;

    return `
      background-color: ${skin.backgroundColor};
      border: 1px solid ${borderColor};
      color: ${skin.textColor};

      ${props.disabled ? `
        box-shadow: none;
        cursor: not-allowed;
      ` : ''}

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

Button.defaultProps = {
  center: false,
  children: 'Catho',
  disabled: false,
  full: false,
  primary: true,
  secondary: false,
  hollow: false,
  light: false,
  link: false,
  type: 'button',
};

Button.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  hollow: PropTypes.bool,
  light: PropTypes.bool,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
};

Button.displayName = 'Button';

class Btn extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Button>{ children }</Button>
      </React.Fragment>
    );
  }
};


Btn.defaultProps = {
  center: false,
  children: 'Catho',
  disabled: false,
  full: false,
  primary: true,
  secondary: false,
  hollow: false,
  light: false,
  link: false,
  type: 'button',
};

Btn.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  hollow: PropTypes.bool,
  light: PropTypes.bool,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
};


export default Button;
