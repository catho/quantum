import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  CodeExample,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
import { storiesOf } from '@storybook/react';
import { BREAKPOINTS } from '../../components/shared';
import { query } from '../../components/Grid/sub-components/shared';

const mediaQueries = query(BREAKPOINTS);

const StyledDivExample = styled.div`
  padding: 15px 20px;
  color: white;
  background-color: red;

  ${mediaQueries.small`
    background-color: blue;
  `}

  ${mediaQueries.medium`
    background-color: green;
  `}

  ${mediaQueries.large`
    background-color: black;
  `}

  ${mediaQueries.xlarge`
    background-color: orange;
  `}
`;

storiesOf('Foundation', module).add('Breakpoints', () => (
  <>
    <Heading title="Breakpoints">
      Breakpoints - Quantum provides a breakpoints object that you can use with
      styled components.
      <br />
      You can create different style rules following the Quantum breakpoints.
    </Heading>

    <StoryContainer>
      <Title as="h2">How to use</Title>

      <p>
        First import `BREAKPOINTS` from `shared`. Second import `query` function
        from `Grid` shared.
      </p>
      <CodeExample
        code={`import { BREAKPOINTS } from '@catho/quantum/shared';
import { query } from '@catho/quantum/Grid/sub-components/shared';
`}
      />
      <p>
        Create a constant variable calling `query` with `BREAKPOINTS` as
        parameter. After, create a styled component and introce the variable. In
        this example we will use a `div`.
      </p>
      <p>
        The variable provides `min-widths` media queries with the following
        sizes:
      </p>
      <p>
        <ul>
          <li>small: 600px</li>
          <li>medium: 1024px</li>
          <li>large: 1440px</li>
          <li>xlarge: 1920px</li>
        </ul>
      </p>
      <p>In each resolution we will change the div background color:</p>
      <p>
        <ul>
          <li>Blue color for `small` resolution.</li>
          <li>Green color for `medium` resolution.</li>
          <li>Black color for `large` resolution.</li>
          <li>Orange color for `xlarge` resolution.</li>
        </ul>
      </p>
      <CodeExample
        code={`const mediaQueries = query(BREAKPOINTS);

const StyledDiv = styled.div\`
  padding: 15px 20px;
  color: white;
  background-color: red;

  \${mediaQueries.small\`
    background-color: blue;
  \`}

  \${mediaQueries.medium\`
    background-color: green;
  \`}

  \${mediaQueries.large\`
    background-color: black;
  \`}

  \${mediaQueries.xlarge\`
    background-color: orange;
  \`}
\`;
      `}
      />

      <p>Test the div in differents sizes:</p>

      <StyledDivExample>Test me in different sizes =)</StyledDivExample>
    </StoryContainer>
  </>
));
