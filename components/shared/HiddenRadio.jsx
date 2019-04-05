import styled, { css } from 'styled-components';
import ButtonGroupLabel from './ButtonGroupLabel';
import { ERROR_HOVER_STYLE } from './inputStyle';
import { FOCUS_STYLE, HOVER_STYLE, ACTIVE_STYLE } from '../Button/buttonStyle';
import Colors from '../Colors';

const _errorInteractiveStyle = ({ checked }) => css`
  ${ERROR_HOVER_STYLE}

  background-color: ${checked ? Colors.ERROR['900'] : Colors.ERROR['200']};
  border-color: ${checked ? Colors.ERROR['900'] : Colors.ERROR['500']};
  color: ${checked ? Colors.WHITE : Colors.ERROR['500']};
`;

export default styled.input.attrs({
  type: 'radio',
})`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0;

  :focus ~ ${ButtonGroupLabel} {
    ${({ error }) => (error ? _errorInteractiveStyle : FOCUS_STYLE)}
  }

  :hover ~ ${ButtonGroupLabel} {
    ${({ error }) => (error ? _errorInteractiveStyle : HOVER_STYLE)}
  }

  :active ~ ${ButtonGroupLabel} {
    ${({ error }) => (error ? _errorInteractiveStyle : ACTIVE_STYLE)}
  }
`;
