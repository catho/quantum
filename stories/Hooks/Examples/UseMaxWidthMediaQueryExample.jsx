import React from 'react';
import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import Alert from '../../../components/Alert';

const importMediaQuery = `import useMaxWidthMediaQuery from '@catho/quantum/shared/hooks'`;

const mediaQueryCode = `
${importMediaQuery}
import { theme } from '@catho/quantum/shared';

const {
  breakpoints: { medium },
} = theme;
const Component = () => {
  const isBreakpoint = useMaxWidthMediaQuery(medium.width)
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

const mockImport = `
import matchMediaMock from '@catho/quantum/shared/helpers'

describe('My tests', () => {
  beforeAll(() => {
    matchMediaMock()
  });
});
`;

const UseMaxWidthMediaQueryExample = () => (
  <StoryContainer>
    <Title as="h2">Importing</Title>
    <SimpleHighlight>{importMediaQuery}</SimpleHighlight>

    <br />
    <Alert icon="warning" skin="warning">
      <strong>Important:</strong>
      <p>
        Due to jest{' '}
        <a href="https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom">
          not supporting windows.matchMedia yet
        </a>
        , we recommend that you use the below mock in your tests. Just add this
        function to the jest-config file or inside a before all in the
        component&apos;s test file.
        <SimpleHighlight>{mockImport}</SimpleHighlight>
      </p>
    </Alert>

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

export default UseMaxWidthMediaQueryExample;
