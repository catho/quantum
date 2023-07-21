import { RadioGroup } from '../../components';

const options = [
  { value: 'Tomato sauce', label: 'Tomato sauce', disabled: true },
  { value: 'Mustard', label: 'Mustard' },
  { value: 'Barbecue sauce', label: 'Barbecue sauce' },
];

const buttonOptions = [
  { value: 'with-icon', label: 'With an Icon', icon: 'info' },
  { value: 'default', label: 'Default' },
];

const getChildren = () =>
  options.map(({ label, value, checked, disabled }) => (
    <RadioGroup.Radio
      label={label}
      value={value}
      checked={checked}
      disabled={disabled}
      key={value}
    />
  ));

const Template = (args) => <RadioGroup name="name-radio" {...args} />;

export const Default = Template.bind({});
Default.args = {
  options,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: getChildren(),
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  ...Default.args,
  defaultValue: options[2].value,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: 'some error message',
};

export const Button = Template.bind({});
Button.args = {
  options: buttonOptions,
  type: 'button',
};

export const Inline = Template.bind({});
Inline.args = {
  ...Button.args,
  inline: true,
};
