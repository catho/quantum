import React from 'react';
import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

const registry = 'registry="http://armazem.devel:4873/"';
const yarnAdd = 'yarn add @cathodevel/quantum';
const importHeader = `import { Header } from '@cathodevel/quantum';
export default () => <Header />;`;

const codeBackgroundColor = '#e8f2fc';
const codefontColor = '#1a82e2';

const Introduction = () => (
  <StoryContainer>
    <Title as="h2">Starting from scratch</Title>
    <p>
      Quantum can be easily included in applications or one-off projects. We
      recommend pulling the latest version of Style Guide&apos;s CSS from our
      CDN. You may also clone this repository and pull in the component SCSS
      files if you wish to only include a portion of Style Guide in your
      project.
    </p>

    <Title as="h3">React based</Title>
    <p>
      We have chosen React as our preferred front-end framework. To that end, we
      maintain the sibling project UI Components, which implements Style Guide
      as React Components. If you are building a feature in React, prefer this
      library because the components encapsulate logic, markup, and (in the
      future) styles. Repository Storybook On NPM
    </p>

    <Title as="h3">Installing Quantum</Title>
    <p>Add as a dependency:</p>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {yarnAdd}
    </SimpleHighlight>
    <p>Use in your react project:</p>
    <SimpleHighlight
      backgroundColor={codeBackgroundColor}
      fontColor={codefontColor}
    >
      {importHeader}
    </SimpleHighlight>
  </StoryContainer>
);

export default Introduction;
