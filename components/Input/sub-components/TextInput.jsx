import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spacing, colors } from '../../shared/theme';
import { hexToRgba, shadow } from '../../shared';

const defaultSkin = ({ theme, error, hasDefaultValue }) => {
  const {
    colors: {
      primary: { 100: primary100, 700: primary700 },
      error: { 100: error100, 700: error700 },
      neutral: {
        0: neutral0,
        100: neutral100,
        500: neutral500,
        700: neutral700,
      },
    },
  } = theme;

  const mainColor = error ? error700 : primary700;

  return css`
    background-color: ${neutral0};
    border: 2px solid ${neutral500};
    color: ${neutral700};

    ${error ? `border-color: ${mainColor};` : ''}
    ${hasDefaultValue ? `background-color: ${primary100};` : ''}

    &:hover, &:focus {
      border-color: ${mainColor};
      ${shadow(2, mainColor)({ theme })}
    }

    &[disabled] {
      background-color: ${neutral100};
      border-color: ${neutral500};
      color: ${neutral500};
    }

    :-webkit-autofill {
      box-shadow: 0 0 0 1000px ${error100} inset;
    }
  `;
};

const darkSkin = ({ theme, error }) => {
  const {
    colors: { primary, neutral },
  } = theme;

  return css`
    background-color: ${hexToRgba(neutral[1000], 0.7)};
    border: 2px solid transparent;
    color: ${neutral[0]};

    &::placeholder {
      color: ${neutral[0]};
    }

    ${error
      ? css`
          border-color: ${neutral[0]};
        `
      : ''}

    &:hover, &:focus {
      border-color: ${primary[500]};
    }

    &[disabled] {
      color: ${hexToRgba(neutral[0], 0.5)};
      border-color: transparent;
    }
  `;
};

const textInputSkinVariations = {
  default: defaultSkin,
  dark: darkSkin,
};

const TextInput = styled.input`
  -webkit-appearance: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-sizing: border-box;
  font-size: initial;
  letter-spacing: 0.2px;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-calendar-picker-indicator,
  &::-webkit-search-cancel-button {
    display: none;
  }
  &::-ms-clear {
    display: none;
  }

  ${({
    hasDefaultValue,
    hasLabel,
    error,
    hasRightIcon,
    hasLeftIcon,
    theme,
    skin,
  }) => {
    const {
      spacing: { xsmall, medium, large },
    } = theme;

    const iconSize = large;
    const horizontalPadding = medium + iconSize + xsmall;

    return css`
      margin-top: ${hasLabel ? xsmall : '0'}px;
      padding: ${xsmall}px ${medium}px;

      ${hasRightIcon ? `padding-right: ${horizontalPadding}px;` : ''}
      ${hasLeftIcon ? `padding-left: ${horizontalPadding}px;` : ''}

      ${textInputSkinVariations[skin]({ theme, error, hasDefaultValue })}

      &[disabled] {
        box-shadow: none;
        cursor: not-allowed;
      }
    `;
  }}
`;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
  skin: PropTypes.oneOf(['default', 'dark']),
};

TextInput.defaultProps = {
  theme: { spacing, colors },
  skin: 'default',
};

export default TextInput;
