// Generated with scripts/create-componnent.js

import DropdownLight from '../../components/DropdownLight';

export default {
  title: 'DropdownLight',
  component: DropdownLight,
};

const Template = args => <DropdownLight {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
