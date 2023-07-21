// Generated with scripts/create-componnent.js

import Breadcrumbs from '../../components/Breadcrumbs';
import defaultContent from '../../test-utils/mocks/Breadcrumb/exampleContents';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs items={defaultContent} {...args} />;

export const Default = Template.bind({});
