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

const ERROR_STYLE = css`
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

const LABEL_STYLE = css`
  margin-bottom: 0;
  padding: 8px 12px 0px;
  font-weight: bold;
`;

const HELPER_TEXT_STYLE = css`
  cursor: text;
  display: block;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  padding: 8px 12px 0px;
`;

const REQUIRED_MARK_STYLE = css`
  color: ${Colors.ERROR['500']};
`;

const ERROR_MESSAGE_STYLE = css`
  padding: 8px 12px 0px;
`;

const AUTO_FILL_STYLE = css`
  box-shadow: 0 0 0px 1000px ${Colors.BLUE['200']} inset;
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
      ${ERROR_STYLE}

      :hover, :focus {
        ${ERROR_HOVER_STYLE}
      }
    `};

  &[disabled] {
    ${DISABLED_STYLE}
  }

  ${({ placeholder, defaultValue, value }) =>
    placeholder &&
    !defaultValue &&
    !value &&
    `
    color: ${Colors.BLACK['400']};
  `}
`;

export {
  DEFAULT_STYLE,
  HOVER_STYLE,
  ERROR_STYLE,
  ERROR_HOVER_STYLE,
  DISABLED_STYLE,
  LABEL_STYLE,
  HELPER_TEXT_STYLE,
  REQUIRED_MARK_STYLE,
  ERROR_MESSAGE_STYLE,
  AUTO_FILL_STYLE,
  INPUT_STYLE as default,
};
