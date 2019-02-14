import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButtons from './SocialButtons';
import theme from '../shared/theme';
import skins from './skins';
import Icon from '../Icon/Icon';

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
    normal: '24px',
  };

  return `font-size: ${sizes[size] || sizes.normal};`;
};

const iconMargin = ({ size }) => {
  const margins = {
    normal: '-5px 5px -7px -5px',
  };

  return `margin: ${margins[size] || margins.normal};`;
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
  ${iconMargin};
`;

const StyledButton = styled.button`
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: center;

  ${fontSize}
  ${padding}
  ${height}
  ${theme.mixins.transition()};

  ${ButtonIcon} {
    ${iconSize}
  }

  ${props =>
    props.full &&
    `
    width: 100%;
  `}

  ${props =>
    props.center &&
    `
    display: block;
    margin-left: auto;
    margin-right: auto;
  `}

  ${props => `
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
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

      &:hover {
        box-shadow: ${hovered.shadow};
        background-color: ${hovered.background};
        border-color: ${hovered.border};
        color: ${hovered.color};
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

class Button extends React.Component {
  static Facebook = SocialButtons.Facebook;

  static Google = SocialButtons.Google;

  render() {
    const { children, icon, size, ...rest } = this.props;

    return (
      <StyledButton {...rest} size={size}>
        {icon && <ButtonIcon size={size} name={icon} />}
        {children}
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  center: false,
  disabled: false,
  full: false,
  icon: '',
  size: 'medium',
  skin: 'primary',
  type: 'button',
  children: 'Catho',
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

export default Button;
