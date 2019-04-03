import styled, { css } from 'styled-components';
import Colors from '../Colors';
import { DEFAULT_STYLE, SKIN_STYLE } from '../Button/buttonStyle';
import Label from './Label';
import { ERROR_STYLE } from './inputStyle';

export default styled(Label).attrs({
  tabindex: 0,
})`
  ${DEFAULT_STYLE}
  ${SKIN_STYLE}

  margin-bottom: 16px;
  display: inline-flex;

  ${({ disabled, error, checked }) =>
    !disabled &&
    error &&
    css`
      color: ${Colors.ERROR['500']};

      ${ERROR_STYLE}

      ${checked &&
        `
      background-color: ${Colors.ERROR['500']};
      color: ${Colors.ERROR['200']};
    `}
    `}
`;
