import { createGlobalStyle } from 'styled-components';
import { BREAKPOINTS } from '../../shared';

export default createGlobalStyle`
  :root {
    --gutter: 16px;
  }

  @media (min-width: ${BREAKPOINTS.small.width}px) {
    :root {
      --gutter: 24px;
    }
  }
`;
