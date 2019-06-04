import styled, { css } from 'styled-components';
import Colors from '../Colors';

const TextInput = styled.input.attrs({
  type: 'text',
})`
  box-sizing: border-box;
  margin-top: 8px;
  padding-right: 42px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  background-color: ${Colors.WHITE};
  border-radius: 4px;
  border: 1.5px solid ${Colors.BLACK['400']};
  box-sizing: border-box;
  color: ${Colors.BLACK['700']};
  font-size: initial;
  height: 44px;
  min-height: 44px;
  letter-spacing: 0.2px;
  outline: none;
  padding: 10px 12px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  :hover,
  :focus {
    border-color: ${Colors.BLUE['500']};
    box-shadow: 0 2px 6px 0 ${Colors.BLUE['50']};
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${Colors.ERROR['500']};

      :hover,
      :focus {
        border-color: ${Colors.ERROR['500']};
        box-shadow: 0 2px 6px 0 ${Colors.ERROR['500']};
      }
    `};

  &[disabled] {
    background-color: ${Colors.BLACK['100']};
    border-color: ${Colors.BLACK['400']};
    box-shadow: none;
    color: ${Colors.BLACK['400']};
    cursor: not-allowed;
  }

  ${({ placeholder, defaultValue, value }) =>
    placeholder &&
    !defaultValue &&
    !value &&
    `
    color: ${Colors.BLACK['400']};
  `}

  ${({ searchable }) =>
    searchable &&
    `
    padding: 10px 42px;
  `}

  ${({ password }) =>
    password &&
    `
    padding-right: 28px;
  `}

  &::-webkit-calendar-picker-indicator {
    display: none;
  }

  :-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${Colors.BLUE['200']} inset;
  }
`;

TextInput.displayName = 'TextInput';

export default TextInput;
