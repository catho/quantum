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
      color: ${skin.textColor};
      background-color: ${skin.backgroundColor};
      border: 1px solid ${borderColor};

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
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

Button.defaultProps = {
  skin: 'border-alpha',
  onClick: null,
  type: 'button',
};

Button.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  skin: PropTypes.oneOf([
    'border-alpha',
    'solid-alpha',
    'solid-beta',
    'solid-white',
    'link',
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
};

export default Button;
