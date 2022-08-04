import Button from '../../components/Button';

const Template = args => {
  const { children, ...rest } = args;
  return <Button {...rest}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  full: true,
  children: 'Full width',
};

export const Centered = Template.bind({});
Centered.args = {
  center: true,
  children: 'Centered',
};

export const Success = Template.bind({});
Success.args = {
  skin: 'success',
  children: 'Success',
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'secondary',
  children: 'Secondary',
};

export const Error = Template.bind({});
Error.args = {
  skin: 'error',
  children: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const Xsmall = Template.bind({});
Xsmall.args = {
  size: 'xsmall',
  children: 'xsmall',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'large',
};

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: 'xlarge',
  children: 'xlarge',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'info',
};
