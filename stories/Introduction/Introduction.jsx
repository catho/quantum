import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Alert } from '../../components';

const yarnAdd = 'yarn add @catho/quantum';
const importHeader = `import { Header } from '@catho/quantum';
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
    <br />
    <Alert icon="warning" skin="warning">
      Quantum is compatible with react@16.14.0 or higher
    </Alert>
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
