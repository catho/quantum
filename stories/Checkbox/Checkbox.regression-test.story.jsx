import { Checkbox } from '../../components';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = args => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'message',
};

export const Label = Template.bind({});
Label.args = {
  label: 'example',
};

export const Value = Template.bind({});
Value.args = {
  value: 'example',
};
