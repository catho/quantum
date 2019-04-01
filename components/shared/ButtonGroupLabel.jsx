import styled, { css } from 'styled-components';
import Colors from '../Colors';
import buttonStyle from '../Button/buttonStyle';
import Label from './Label';
import { ERROR_HOVER_STYLE, ERROR_STYLE } from './inputStyle';

export default styled(Label)`
  ${buttonStyle}

  margin-bottom: 16px;

  ${({ error, checked }) =>
    error &&
    css`
    color: ${Colors.ERROR['500']};

    ${ERROR_STYLE}

    :hover, :focus {
      ${ERROR_HOVER_STYLE}

      color: ${checked ? Colors.WHITE : Colors.ERROR['500']};
      border-color: ${checked ? Colors.ERROR['900'] : Colors.ERROR['500']};
      background-color: ${checked ? Colors.ERROR['900'] : Colors.ERROR['200']};
    }

    ${checked &&
      `
      background-color: ${Colors.ERROR['500']};
      color: ${Colors.ERROR['200']};
    `}
  `}
`;
