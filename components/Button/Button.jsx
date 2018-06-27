import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButtons from './SocialButtons';
import { SIZES } from '../Grid/sub-components/shared/grid-config';
import theme from '../../theme';
import skins from './skins';
import Icon from '../Icon/Icon';

const fontSize = ({ size }) =>
  `font-size: ${theme.font[size] || theme.font.normal};`;
const iconSize = ({ size }) => {
  const sizes = {
    normal: '24px',
    big: '32px',
  };

  return `font-size: ${sizes[size] || sizes.normal};`;
};

const iconMargin = ({ size }) => {
  const margins = {
    normal: '-5px 5px -7px -5px',
    big: '-5px 5px -10px -10px',
  };

  return `margin: ${margins[size] || margins.normal};`;
};

const padding = ({ size }) => {
  const paddings = {
    normal: '8px 10px',
    big: '15px 27px',
  };

  return `padding: ${paddings[size] || paddings.normal};`;
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
  ${theme.mixins.shadow()};
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
    const { unselected, selected, disabled } = skins(props);

    return `
      background-color: ${
        props.disabled ? disabled.background : unselected.background
      };
      border: 1px solid ${props.disabled ? disabled.border : unselected.border};
      color: ${props.disabled ? disabled.color : unselected.color};
      font-weight: ${
        props.disabled ? disabled.fontWeight : unselected.fontWeight
      };

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
  size: 'normal',
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
  size: PropTypes.oneOf(['normal', 'big']),
  skin: PropTypes.oneOf(['primary', 'secondary', 'action', 'cancel', 'modal']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
