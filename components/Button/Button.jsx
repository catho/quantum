import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shadow } from '../shared';
import {
  components,
  spacing,
  colors as defaultColors,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

import Icon from '../Icon/Icon';
import Colors from '../Colors';

const ButtonIcon = styled(Icon)`
  pointer-events: none;
`;

const StyledButton = styled.button`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.2px;
  border-radius: 4px;

  ${props => `cursor: ${props.disabled ? 'not-allowed' : 'pointer'};`}

  ${({ size, theme: { baseFontSize } }) => {
    const sizes = {
      xsmall: `${baseFontSize * 0.75}px`,
      small: `${baseFontSize * 0.75}px`,
      medium: `${baseFontSize}px`,
      large: `${baseFontSize * 1.25}px`,
      xlarge: `${baseFontSize * 1.5}px`,
    };
    return `font-size: ${sizes[size] || sizes.medium};`;
  }}

  ${({
    size,
    theme: {
      spacing: { large, xlarge, xxlarge, xxxlarge },
    },
  }) => {
    const heights = {
      xsmall: `${large}px`,
      small: `${xlarge}px`,
      medium: `${xxlarge}px`,
      large: `${xxxlarge}px`,
    };

    return `height: ${heights[size] || heights.medium};`;
  }}

  ${({
    size,
    theme: {
      spacing: { small, medium },
    },
  }) => {
    const paddings = {
      xsmall: `0 ${small}px`,
      small: `0 ${small}px`,
      medium: `0 ${medium}px`,
      large: `0 ${medium}px`,
      xlarge: `0 ${medium}px`,
    };

    return `padding: ${paddings[size] || paddings.medium};`;
  }}

  ${props =>
    props.center &&
    `
    margin-left: auto;
    margin-right: auto;
  `}

  ${ButtonIcon} {
    margin-right: 5px;
  }

  transition: all 0.2s ease-in-out;

  ${props => props.full && `width: 100%;`}

  ${({ skin, theme, disabled, stroked }) => {
    const {
      components: {
        button: {
          skins: {
            [skin]: {
              mainColor: {
                100: mainColor100,
                500: mainColor500,
                700: mainColor700,
              },
              text: { 100: text100 },
            },
          },
        },
      },
      colors: {
        neutral: { 100: neutral100, 500: neutral500 },
      },
    } = theme;

    let bgColor;
    let textColor;

    if (disabled && stroked) {
      bgColor = neutral100;
      textColor = neutral500;
    } else if (stroked) {
      bgColor = neutral100;
      textColor = mainColor500;
    } else if (disabled) {
      bgColor = neutral500;
      textColor = neutral100;
    } else {
      bgColor = mainColor500;
      textColor = text100;
    }

    return `
      background-color: ${bgColor};
      color: ${textColor};

      border: 1.5px solid ${disabled ? neutral500 : mainColor500};

      ${shadow(2, neutral500)({ theme })}

      :hover {
        ${
          !disabled
            ? `
              ${shadow(4, mainColor700)({ theme })}
              background-color: ${stroked ? mainColor100 : mainColor700};
              border-color: ${mainColor700};
            `
            : ''
        }
      }

      :focus,
      :focus-within {
        ${!disabled ? shadow(4, mainColor500)({ theme }) : ''}
      }

      :active {
        ${
          !disabled
            ? `
              ${shadow(8, mainColor700)({ theme })}
              background-color: ${mainColor700};
            `
            : ''
        }
      }

    ${ButtonIcon} {
      ${({
        size,
        theme: {
          spacing: { medium, large },
        },
      }) => {
        const sizes = {
          xsmall: `${medium}px`,
          small: `${medium}px`,
          normal: `${large}px`,
          large: `${large}px`,
          xlarge: `${large}px`,
        };

        return `font-size: ${sizes[size] || sizes.normal};`;
      }}
    }
    `;
  }}
`;

const Button = ({ children, icon, size, $as, ...rest }) => (
  <StyledButton as={$as} {...rest} size={size}>
    {icon && <ButtonIcon size={size} name={icon} />}
    {children}
  </StyledButton>
);

Button.defaultProps = {
  center: false,
  disabled: false,
  stroked: false,
  full: false,
  icon: '',
  size: 'medium',
  skin: 'primary',
  type: 'button',
  children: undefined,
  $as: undefined,
  onClick: () => {},
  theme: {
    colors: defaultColors,
    baseFontSize: defaultBaseFontSize,
    spacing,
    components: {
      button: components.button,
    },
  },
};

Button.propTypes = {
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  stroked: PropTypes.bool,
  full: PropTypes.bool,
  /** Icon name. The full catalogue can be found
   * [here](/?selectedKind=1.%20Foundation&selectedStory=Icons) */
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  skin: PropTypes.oneOf([
    'neutral',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** https://www.styled-components.com/docs/api#as-polymorphic-prop */
  $as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
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
