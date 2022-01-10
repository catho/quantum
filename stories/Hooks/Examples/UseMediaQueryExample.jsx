import React from 'react';
import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

const importMediaQuery = `import useMediaQuery from '@catho/quantum/shared/hooks/UseMediaQuery'`;

const mediaQueryCode = `
${importMediaQuery}
import { theme } from '@catho/quantum/shared';

const {
  breakpoints: { medium },
} = theme;
const Component = () => {
  const isBreakpoint = useMediaQuery(medium.width)
  return (
    <>
      { isBreakpoint ? (
        <div>
          <Componente1 />
        </div>
      ) : (
        <div>
          <Componente2 />
        </div>
      )}
    </>
  )
}

export default Component;
`;

const UseMediaQueryExample = () => (
  <StoryContainer>
    <Title as="h2">Importing</Title>
    <SimpleHighlight>{importMediaQuery}</SimpleHighlight>

    <Title as="h3">Usage</Title>
    <p>
      This hook uses css media query(max-width) to check browser resize. Instead
      of firing with every pixel change, like useWindowSize, it will fire only
      when browser goes through the defined media query; It will return a
      boolean.
    </p>
    <SimpleHighlight>{mediaQueryCode}</SimpleHighlight>
  </StoryContainer>
);

export default UseMediaQueryExample;
