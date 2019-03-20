import { css } from 'styled-components';
import Colors from '../Colors';

const DEFAULT_STYLE = css`
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
`;

const HOVER_STYLE = css`
  border-color: ${Colors.BLUE['500']};
  box-shadow: 0 2px 6px 0 ${Colors.BLUE['50']};
`;

const ERROR_STŸLE = css`
  border-color: ${Colors.ERROR['500']};
`;

const ERROR_HOVER_STYLE = css`
  border-color: ${Colors.ERROR['500']};
  box-shadow: 0 2px 6px 0 ${Colors.ERROR['500']};
`;

const DISABLED_STYLE = css`
  background-color: ${Colors.BLACK['100']};
  border-color: ${Colors.BLACK['400']};
  box-shadow: none;
  color: ${Colors.BLACK['400']};
  cursor: not-allowed;
`;

const INPUT_STYLE = css`
  ${DEFAULT_STYLE}

  :hover,
  :focus {
    ${HOVER_STYLE}
  }

  ${({ error }) =>
    error &&
    css`
      ${ERROR_STŸLE}

      :hover, :focus {
        ${ERROR_HOVER_STYLE}
      }
    `};

  &[disabled] {
    ${DISABLED_STYLE}
  }
`;

export {
  DEFAULT_STYLE,
  HOVER_STYLE,
  ERROR_STŸLE,
  ERROR_HOVER_STYLE,
  DISABLED_STYLE,
  INPUT_STYLE as default,
};
