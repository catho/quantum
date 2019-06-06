import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, colors } from '../../shared/theme';
import { shadow } from '../../shared';

const TextInput = styled.input`
  border-radius: 4px;
  box-sizing: border-box;
  box-sizing: border-box;
  font-size: initial;
  height: 44px;
  letter-spacing: 0.2px;
  min-height: 44px;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  ${({ defaultValue, error, hasIcon, placeholder, theme, value }) => {
    const {
      colors: {
        primary: { 500: primaryColor },
        error: { 100: error100, 500: error500 },
        neutral: {
          100: neutral100,
          300: neutral300,
          500: neutral500,
          700: neutral700,
        },
      },
      spacing: { xsmall, small, xxlarge },
    } = theme;

    const mainColor = error ? error500 : primaryColor;

    return `
      background-color: ${neutral100};
      border: 2px solid ${neutral500};
      color: ${neutral700};
      margin-top: ${xsmall}px;
      padding: ${small}px;

      ${hasIcon ? `padding-right: ${xxlarge}px;` : ''}
      ${error ? `border-color: ${mainColor};` : ''}
      ${placeholder && !defaultValue && !value ? `color: ${neutral500};` : ''}

      :hover, :focus {
        border-color: ${mainColor};
        ${shadow(5, mainColor)({ theme })}
      }

      &[disabled] {
        background-color: ${neutral300};
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
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
};

TextInput.defaultProps = {
  theme: { spacing, colors },
};

export default TextInput;
