import Button from '../../components/Button';

const Template = args => {
  const { chidlren, ...rest } = args;
  return <Button {...rest}>{chidlren}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  chidlren: 'Default',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  full: true,
  chidlren: 'Full width',
};

export const Centered = Template.bind({});
Centered.args = {
  center: true,
  chidlren: 'Centered',
};

export const Success = Template.bind({});
Success.args = {
  skin: 'success',
  chidlren: 'Success',
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'secondary',
  chidlren: 'Secondary',
};

export const Error = Template.bind({});
Error.args = {
  skin: 'error',
  chidlren: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  chidlren: 'Disabled',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'info',
};
