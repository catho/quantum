import { createGlobalStyle } from 'styled-components';
import BREAKPOINTS from './breakpoints';

export default createGlobalStyle`
  :root {
    --gutter: 16px;
  }

  @media (min-width: ${BREAKPOINTS.small}px) {
    :root {
      --gutter: 24px;
    }
  }
`;
