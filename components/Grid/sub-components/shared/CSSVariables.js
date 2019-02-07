import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --gutter: 16px;
  }

  @media (min-width: 720px) {
    :root {
      --gutter: 24px;
    }
  }
`;
