// Generated with scripts/create-componnent.js

import DropdownLight from '../../components/DropdownLight';

export default {
  title: 'DropdownLight',
  component: DropdownLight,
};

const items = ['Lemon', 'Banana', 'Strawberry', 'Orange', 'Avocado'];

const Template = args => <DropdownLight items={items} {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
