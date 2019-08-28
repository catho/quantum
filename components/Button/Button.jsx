import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shadow, hexToRgba, theme as defaultTheme } from '../shared';
import { query } from '../Grid/sub-components/shared';

import {
  components,
  spacing,
  colors as defaultColors,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

import Icon from '../Icon/Icon';

const buttonIconBreakpoints = (props, breakpoint) => {
  const q = query(props.theme.breakpoints)[breakpoint];

  return q`
    margin-right: ${props.theme.spacing[breakpoint] / 2}px;
  `;
};

const ButtonIcon = styled(Icon)`
  pointer-events: none;

  ${props =>
    Object.keys(props.theme.breakpoints).map(breakpoint => {
      return buttonIconBreakpoints(props, breakpoint);
    })}
`;

const buttonFontAndLineProps = ({ size, theme: { baseFontSize } }) => {
  const sizes = {
    xsmall: `${baseFontSize * 0.75}px`,
    small: `${baseFontSize * 0.75}px`,
    medium: `${baseFontSize}px`,
    large: `${baseFontSize * 1.25}px`,
    xlarge: `${baseFontSize * 1.5}px`,
  };
  const lineHeights = {
    xsmall: `${baseFontSize * 0.75 * 1.5}px`,
    small: `${baseFontSize * 0.75 * 1.5}px`,
    medium: `${baseFontSize * 1.5}px`,
    large: `${baseFontSize * 1.25 * 1.5}px`,
    xlarge: `${baseFontSize * 1.5 * 1.5}px`,
  };
  return `
    font-size: ${sizes[size]};
    line-height: ${lineHeights[size]};
  `;
};

const StyledButton = styled.button`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  letter-spacing: 0.2px;
  border-radius: 4px;

  ${props => `cursor: ${props.disabled ? 'not-allowed' : 'pointer'};`}

  ${buttonFontAndLineProps}

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

    return `min-height: ${heights[size]};`;
  }}

  ${({
    size,
    theme: {
      spacing: { small, medium, xsmall, xxsmall, large },
    },
  }) => {
    const paddings = {
      xsmall: `${xxsmall}px ${small}px`,
      small: `${small / 2}px ${small}px`,
      medium: `${xsmall}px ${medium}px`,
      large: `${xsmall * 1.25}px ${medium}px`,
      xlarge: `${large / 2}px ${medium}px`,
    };

    return `padding: ${paddings[size]};`;
  }}

  ${props =>
    props.center &&
    `
    margin-left: auto;
    margin-right: auto;
  `}

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

      border: 2px solid ${disabled ? neutral500 : mainColor500};

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
              background-color: ${stroked ? mainColor100 : mainColor700};
            `
            : ''
        }
      }

    ${ButtonIcon} {
      ${({
        size,
        theme: {
          spacing: { xxsmall, medium, large },
        },
      }) => {
        const sizes = {
          xsmall: `${medium}px`,
          small: `${medium}px`,
          medium: `${large}px`,
          large: `${large}px`,
          xlarge: `${large}px`,
        };

        return `
          font-size: ${sizes[size]};
          margin-right: ${xxsmall}px;
        `;
      }}
    }
    `;
  }}
`;

const Button = ({ children, icon, size, $as, ...rest }) => (
  <StyledButton as={$as} {...rest} size={size}>
    {icon && <ButtonIcon size={size} name={icon} {...rest} />}
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
    breakpoints: defaultTheme.breakpoints,
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
    breakpoints: PropTypes.arrayOf(PropTypes.any),
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
};

const IconButton = styled(Button)`
  ${({ skin, theme }) => {
    const {
      components: {
        button: {
          skins: {
            [skin]: {
              mainColor: {
                300: mainColor300,
                500: mainColor500,
                700: mainColor700,
              },
            },
          },
        },
      },
    } = theme;

    return `
    border-radius: 50%;
    border: none;
    color: ${hexToRgba(mainColor500, 0.5)};
    width: 40px;

    background-color: transparent;
    box-shadow: none;
    outline: none;

    ${ButtonIcon} {
      margin-right: 0;
    }

    :hover,
    :focus {
      box-shadow: none;
      background-color: ${hexToRgba(mainColor300, 0.4)};
      color: ${mainColor700};
    }

    :active {
      box-shadow: none;
      background-color: ${hexToRgba(mainColor300, 0.5)};
      color: ${mainColor700};
    }
    `;
  }}
`;

IconButton.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  skin: PropTypes.oneOf([
    'neutral',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
};

IconButton.defaultProps = {
  size: 'medium',
  skin: 'neutral',
  theme: {
    breakpoints: defaultTheme.breakpoints,
    gutter: '8px',
    baseFontSize: defaultBaseFontSize,
    spacing,
    components: {
      button: components.button,
    },
  },
};

Button.Icon = IconButton;

export default Button;
