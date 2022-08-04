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

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'success',
  children: 'Success',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const WithSize = Template.bind({});
WithSize.args = {
  size: 'small',
  children: 'Small',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'info',
};
