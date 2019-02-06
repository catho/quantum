import { createGlobalStyle } from 'styled-components';

const GlobalVars = createGlobalStyle`
  :root {
    --gutter: 8px;
  }

  @media (min-width: 720px) {
    :root {
      --gutter: 12px;
    }
  }
`;

export default GlobalVars;
