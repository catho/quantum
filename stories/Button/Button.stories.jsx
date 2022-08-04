import Button from '../../components/Button';

const Template = args => {
  const { chidlren, ...rest } = args;
  return <Button {...rest}>{chidlren}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  full: true,
  chidlren: 'Default',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  full: true,
  chidlren: 'FullWidth',
};

export const Centered = Template.bind({});
Centered.args = {
  center: true,
  skin: 'success',
  chidlren: 'Centered',
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'secondary',
  chidlren: 'Secondary',
};

export const WithInfoIcon = Template.bind({});
WithInfoIcon.args = {
  icon: 'info',
  chidlren: 'Info',
};

export const WithSearchIcon = Template.bind({});
WithSearchIcon.args = {
  icon: 'search',
  chidlren: 'Search',
};

export const WithAccessibleIcon = Template.bind({});
WithAccessibleIcon.args = {
  icon: 'accessible_forward',
  skin: 'secondary',
  chidlren: 'Accessible',
};

export const WithErrorIcon = Template.bind({});
WithErrorIcon.args = {
  icon: 'error',
  skin: 'error',
  chidlren: 'Error',
};

export const WithCreditCardIcon = Template.bind({});
WithCreditCardIcon.args = {
  icon: 'credit_card',
  chidlren: 'Credit Card',
};

export const WithLockedIcon = Template.bind({});
WithLockedIcon.args = {
  icon: 'lock',
  disabled: true,
  chidlren: 'Locked',
};

export const WithDoneIcon = Template.bind({});
WithDoneIcon.args = {
  icon: 'done',
  chidlren: 'Done',
  skin: 'warning',
};
