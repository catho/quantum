import { css } from 'styled-components';
import Colors from '../Colors';

export default css`
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  border: 1.5px solid ${Colors.BLACK['400']};
  color: ${Colors.BLACK['700']};
  cursor: pointer;
  font-size: initial;
  height: 44px;
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
    `
    border-color: ${Colors.ERROR['500']};

    :hover, :focus {
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
`;
