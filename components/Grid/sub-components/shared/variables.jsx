import { createGlobalStyle } from 'styled-components';

const GlobalVars = createGlobalStyle`
  :root {
    --gutter: 16px;
  }

  @media (min-width: 720px) {
    :root {
      --gutter: 24px;
    }
  }
`;

export default GlobalVars;
