module.exports = componentName => [
  {
    content: `// Generated with scripts/create-componnent.js
import React from 'react';
import {
  AutoExample,
  Tab,
  StoryContainer,
  Title,
  Example,
} from '@catho/quantum-storybook-ui';

import ${componentName} from '../../components/${componentName}';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Title as="h3">${componentName} default</Title>
      <Example
        component={<${componentName} />}
        code="<${componentName} />"
      />
    </StoryContainer>
  </Tab>
)

export default {
  title: '${componentName}',
};

export const ${componentName}Story = () => (
  <AutoExample
    description="Some description for component"
    component={${componentName}}
    additionalTabs={TabExample}
  />
)
    `,
    name: `${componentName}.story.jsx`,
  },
  {
    content: `// Generated with scripts/create-componnent.js
import React from 'react';

import ${componentName} from '../../components/${componentName}';

export default {
  title: '${componentName}',
  component: ${componentName},
};

const Template = args => <${componentName} {...args} />;

export const Default = Template.bind({})
    `,
    name: `${componentName}.regression-test.story.jsx`,
  },
];
