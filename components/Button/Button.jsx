import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButtons from './SocialButtons';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import theme from '../shared/theme';
import skins from './skins';
import Icon from '../Icon/Icon';

const fontSize = ({ size }) => {
  const sizes = {
    xsmall: '12px',
    small: '12px',
    medium: '16px',
    big: '20px',
    xbig: '24px',
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
    medium: '0 12px',
    big: '0 16px',
    xbig: '0 16px',
  };

  return `padding: ${paddings[size] || paddings.normal};`;
};

const height = ({ size }) => {
  const heights = {
    xsmall: '24px',
    small: '32px',
    medium: '40px',
    big: '48px',
    xbig: '56px',
  };

  return `height: ${heights[size] || heights.normal};`;
};

const ButtonIcon = styled(Icon)`
  ${iconMargin};
`;

const StyledButton = styled.button`
  border-radius: ${theme.sizes.radius};
  font-weight: bold;
  text-align: center;
  text-decoration: ${props => (props.link ? 'underline' : 'none')};

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
    const { unselected, selected, disabled, shadow } = skins(props);

    return `
      background-color: ${
        props.disabled ? disabled.background : unselected.background
      };
      border: 1px solid ${props.disabled ? disabled.border : unselected.border};
      color: ${props.disabled ? disabled.color : unselected.color};
      font-weight: ${
        props.disabled ? disabled.fontWeight : unselected.fontWeight
      };

      ${shadow ? theme.mixins.shadow() : undefined};

      &:active {
        ${shadow && theme.mixins.shadow(2)};
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
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'big', 'xbig']),
  skin: PropTypes.oneOf(['primary', 'secondary', 'action']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
