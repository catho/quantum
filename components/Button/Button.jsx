import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon/Icon';
import Colors from '../Colors';
import buttonStyle from './buttonStyle';

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

const ButtonIcon = styled(Icon)`
  pointer-events: none;
`;

const StyledButton = styled.button`
  ${buttonStyle}

  ${ButtonIcon} {
    ${iconSize}
  }
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
  children: PropTypes.string,
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
