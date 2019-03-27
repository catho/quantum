import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../shared/theme';
import skins from './skins';
import Icon from '../Icon/Icon';
import Colors from '../Colors';

const fontSize = ({ size }) => {
  const sizes = {
    xsmall: '12px',
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  };
  return `font-size: ${sizes[size] || sizes.medium};`;
};

const iconSize = ({ size }) => {
  const sizes = {
    xsmall: '16px',
    small: '16px',
    normal: '24px',
    large: '24px',
    xlarge: '24px',
  };

  return `font-size: ${sizes[size] || sizes.normal};`;
};

const padding = ({ size }) => {
  const paddings = {
    xsmall: '0 12px',
    small: '0 12px',
    medium: '0 16px',
    large: '0 16px',
    xlarge: '0 16px',
  };

  return `padding: ${paddings[size] || paddings.medium};`;
};

const height = ({ size }) => {
  const heights = {
    xsmall: '24px',
    small: '32px',
    medium: '40px',
    large: '48px',
    xlarge: '56px',
  };

  return `height: ${heights[size] || heights.medium};`;
};

const ButtonIcon = styled(Icon)`
  pointer-events: none;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 0.2px;

  *:nth-child(2) {
    margin-left: 5px;
  }

  ${fontSize}
  ${padding}
  ${height}
  ${theme.mixins.transition()};

  ${ButtonIcon} {
    ${iconSize}
  }

  ${props => `cursor: ${props.disabled ? 'not-allowed' : 'pointer'};`}
  ${props => props.full && `width: 100%;`}
  ${props =>
    props.center &&
    `
    margin-left: auto;
    margin-right: auto;
  `}

  ${props => {
    const {
      unselected,
      selected,
      disabled,
      focused,
      hovered,
      decoration,
      borderRadius,
    } = skins(props);

    return `${`
      background-color: ${
        props.disabled ? disabled.background : unselected.background
      };
      border: 1.5px solid ${
        props.disabled ? disabled.border : unselected.border
      };

      box-shadow: ${props.disabled ? disabled.shadow : unselected.shadow};

      color: ${props.disabled ? disabled.color : unselected.color};

      ${decoration ? `text-decoration: ${decoration};` : ''}
      ${borderRadius ? `border-radius: ${borderRadius};` : ''}
    `}

      ${
        !props.disabled
          ? `
        &:hover {
          box-shadow: ${hovered.shadow};
          background-color: ${hovered.background};
          border-color: ${hovered.border};
          color: ${hovered.color};
        }
      `
          : ''
      }

      &:focus {
        box-shadow: ${focused.shadow};
        background-color: ${focused.background};
        border-color: ${focused.border};
        color: ${focused.color};
      }

      &:active {
        box-shadow: ${selected.shadow};
        background-color: ${selected.background};
        border-color: ${selected.border};
        color: ${selected.color};
      }
    `;
  }}
`;

const Button = ({ children, icon, size, ...rest }) => (
  <StyledButton {...rest} size={size}>
    {icon && <ButtonIcon size={size} name={icon} />}
    {children && <span>{children}</span>}
  </StyledButton>
);

Button.defaultProps = {
  center: false,
  disabled: false,
  full: false,
  icon: '',
  size: 'medium',
  skin: 'primary',
  type: 'button',
  children: undefined,
  onClick: () => {},
};

Button.propTypes = {
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  /** Icon name. The full catalogue can be found
   * [here](/?selectedKind=1.%20Foundation&selectedStory=Icons) */
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  skin: PropTypes.oneOf(['primary', 'secondary', 'action', 'link']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const IconButton = styled(Button)`
  border-radius: 50%;
  border: none;
  color: ${Colors.SHADOW[50]};
  width: 40px;

  background-color: transparent;
  box-shadow: none;
  outline: none;

  :hover,
  :focus {
    box-shadow: none;
    background-color: ${Colors.SHADOW[40]};
    color: ${Colors.BLACK[700]};
  }
  :active {
    box-shadow: none;
    background-color: ${Colors.SHADOW[50]};
    color: ${Colors.BLACK[700]};
  }
`;

Button.Icon = IconButton;

export default Button;
