import React from 'react';
import styled from 'styled-components';
import {
  Heading,
  CodeExample,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
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

export default {
  title: 'Foundation',
};

export const Breakpoints = () => (
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
        First import <code>BREAKPOINTS</code> from <code>shared</code>. Second
        import <code>query</code> function from <code>Grid</code> shared.
      </p>
      <CodeExample
        code={`import { BREAKPOINTS } from '@catho/quantum/shared';
import { query } from '@catho/quantum/Grid/sub-components/shared';
`}
      />
      <p>
        Create a constant variable calling <code>query</code> with{' '}
        <code>BREAKPOINTS</code> as parameter. After, create a styled component
        and introduce the variable. In this example we will use a{' '}
        <code>div</code>.
      </p>
      <p>
        The variable provides <code>min-widths</code> media queries with the
        following sizes:
      </p>
      <ul>
        <li>small: 600px</li>
        <li>medium: 1024px</li>
        <li>large: 1440px</li>
        <li>xlarge: 1920px</li>
      </ul>
      <p>In each resolution we will change the div background color:</p>
      <ul>
        <li>
          Blue color for <code>small</code> resolution.
        </li>
        <li>
          Green color for <code>medium</code> resolution.
        </li>
        <li>
          Black color for <code>large</code> resolution.
        </li>
        <li>
          Orange color for <code>xlarge</code> resolution.
        </li>
      </ul>
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
);
