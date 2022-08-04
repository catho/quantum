import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { shadow, hexToRgba, theme as defaultTheme } from '../shared';

import {
  components,
  spacing,
  colors as defaultColors,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

import Icon from '../Icon/Icon';

const ButtonIcon = styled(Icon)`
  pointer-events: none;

  ${({
    theme: {
      spacing: { xsmall },
    },
  }) =>
    css`
      &.with-children {
        margin-right: ${xsmall}px;
      }
    `}

  width: ${defaultBaseFontSize * 1.5}px;
`;

const buttonFontAndLineProps = ({ size, theme: { baseFontSize } }) => {
  const fontSizes = {
    xsmall: `${baseFontSize * 0.75}px`,
    small: `${baseFontSize * 0.75}px`,
    medium: `${baseFontSize}px`,
    large: `${baseFontSize * 1.25}px`,
    xlarge: `${baseFontSize * 1.5}px`,
  };

  const lineHeights = {
    xsmall: `${baseFontSize}px`,
    small: `${baseFontSize * 0.75 * 1.5}px`,
    medium: `${baseFontSize * 1.5}px`,
    large: `${baseFontSize * 1.75}px`,
    xlarge: `${baseFontSize * 2}px`,
  };

  return css`
    font-size: ${fontSizes[size]};
    line-height: ${lineHeights[size]};
  `;
};

const StyledButton = styled.button`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  justify-content: center;
  border-radius: 4px; 

  ${({ disabled }) =>
    css`
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    `}

  ${buttonFontAndLineProps}

  ${({
    size,
    theme: {
      spacing: { xsmall, large, xlarge, xxlarge, xxxlarge },
    },
  }) => {
    const heights = {
      xsmall: `${large}px`,
      small: `${xlarge}px`,
      medium: `${xxlarge}px`,
      large: `${xxxlarge}px`,
      xlarge: `${xxxlarge + xsmall}px`,
    };

    return css`
      min-height: ${heights[size]};
    `;
  }}

  ${({
    size,
    theme: {
      spacing: { xsmall, xxsmall, medium },
    },
  }) => {
    const borderWidth = 2;
    const borderSize = borderWidth * 2;
    const paddings = {
      xsmall: `${xxsmall - borderSize}px ${xsmall}px`,
      small: `${xsmall - borderSize}px ${medium}px`,
      medium: `${xsmall - borderSize}px ${medium}px`,
      large: `${xsmall - borderSize}px ${medium}px`,
      xlarge: `${xsmall - borderSize}px ${medium}px`,
    };

    return css`
      padding: ${paddings[size]};
    `;
  }}

  ${props =>
    props.center &&
    css`
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
                700: mainColor700,
                900: mainColor900,
              },
              text: { 0: text0 },
            },
          },
        },
      },
      colors: {
        neutral: {
          0: neutral0,
          300: neutral300,
          500: neutral500,
          700: neutral700,
        },
      },
    } = theme;

    let bgColor;
    let textColor;
    let borderColor;

    if (disabled && stroked) {
      bgColor = neutral300;
      borderColor = neutral500;
      textColor = neutral700;
    } else if (stroked) {
      bgColor = neutral0;
      borderColor = mainColor700;
      textColor = mainColor700;
    } else if (disabled) {
      bgColor = neutral300;
      borderColor = bgColor;
      textColor = neutral700;
    } else {
      bgColor = mainColor700;
      borderColor = bgColor;
      textColor = text0;
    }

    return css`
      background-color: ${bgColor};
      color: ${textColor};
      border: 2px solid ${borderColor};

      ${shadow(2, neutral500)({ theme })} :hover {
        ${!disabled
          ? css`
              ${shadow(4, mainColor900)({ theme })}
              background-color: ${stroked ? mainColor100 : mainColor900};
              border-color: ${mainColor900};
            `
          : ''}
      }

      :focus,
      :focus-within {
        ${!disabled ? shadow(4, mainColor700)({ theme }) : ''}
      }

      :active {
        ${!disabled
          ? css`
              ${shadow(8, mainColor900)({ theme })}
              background-color: ${stroked ? mainColor100 : mainColor900};
            `
          : ''}
      }
    `;
  }}
`;

const Button = ({ children, icon, size, $as, theme, ...rest }) => (
  <StyledButton as={$as} {...rest} size={size} theme={theme}>
    {icon && (
      <ButtonIcon
        className={children ? 'with-children' : ''}
        size={size}
        name={icon}
        theme={theme}
      />
    )}
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
   * [here](/?path=/docs/foundation-icons--page#catalog) */
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
    PropTypes.string,
  ]),
  /** https://www.styled-components.com/docs/api#as-polymorphic-prop */
  $as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
    breakpoints: PropTypes.object,
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

    return css`
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
