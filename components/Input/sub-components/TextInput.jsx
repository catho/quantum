import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, colors } from '../../shared/theme';
import { shadow } from '../../shared';

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
  }) => {
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
      spacing: { xsmall, medium, large },
    } = theme;

    const mainColor = error ? error700 : primary700;
    const iconSize = large;
    const horizontalPadding = medium + iconSize + xsmall;

    return `
      background-color: ${neutral0};
      border: 2px solid ${neutral500};
      color: ${neutral700};
      margin-top: ${hasLabel ? xsmall : '0'}px;
      padding: ${xsmall}px ${medium}px;

      ${hasRightIcon ? `padding-right: ${horizontalPadding}px;` : ''}
      ${hasLeftIcon ? `padding-left: ${horizontalPadding}px;` : ''}
      ${error ? `border-color: ${mainColor};` : ''}
      ${hasDefaultValue ? `background-color: ${primary100};` : ''}

      :hover, :focus {
        border-color: ${mainColor};
        ${shadow(2, mainColor)({ theme })}
      }

      &[disabled] {
        background-color: ${neutral100};
        border-color: ${neutral500};
        box-shadow: none;
        color: ${neutral500};
        cursor: not-allowed;
      }

      :-webkit-autofill {
        box-shadow: 0 0 0 1000px ${error100} inset;
      }
    `;
  }}
`;

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  theme: PropTypes.objectOf({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
};

TextInput.defaultProps = {
  theme: { spacing, colors },
};

export default TextInput;
