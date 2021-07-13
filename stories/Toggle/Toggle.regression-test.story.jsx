import React from 'react';

import Toggle from '../../components/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
};

const Template = args => <Toggle {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
