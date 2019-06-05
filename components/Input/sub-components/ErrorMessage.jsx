import styled from 'styled-components';
import { ErrorMessage } from '../../shared';

const InputErrorMessage = styled(ErrorMessage)`
  padding: 8px 12px 0px;

  ${({ helperText }) =>
    helperText &&
    `
    padding-top: 2px;
  `}
`;

export default InputErrorMessage;
