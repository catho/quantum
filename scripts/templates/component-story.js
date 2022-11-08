module.exports = componentName => [
  {
    content: `<!-- Generated with scripts/create-componnent.js -->
import { Meta, Canvas, Story, ArgsTable } from '@storybook/addon-docs';
import  ${componentName}  from '../../components/${componentName}';

import { Header } from '../shared';

import { 
  Default
} from './${componentName}.stories.jsx';

<Meta title="${componentName}" component={${componentName}}  />

<Header title="${componentName}">
      Some description for component.
</Header>

- [Importing and usage](#importing)
- [API](#api)

## <a id="importing"></a>Importing and usage

\`\`\`js
import { ${componentName} } from '@catho/quantum';
\`\`\`

<Canvas>
  <Story story={Default} />
</Canvas>

## <a id="api"></a>API

<ArgsTable of={${componentName}} />
    `,
    name: `${componentName}.story.mdx`,
  },
  {
    content: `// Generated with scripts/create-componnent.js

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
  {
    content: `// Generated with scripts/create-componnent.js

import ${componentName} from '../../components/${componentName}';

const Template = args => <${componentName} {...args} />;

export const Default = Template.bind({})
    `,
    name: `${componentName}.stories.jsx`,
  },
];
