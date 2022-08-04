import { Checkbox } from '../../components';

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
