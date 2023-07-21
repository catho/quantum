import Badge from '../../components/Badge';
import Button from '../../components/Button';

const Template = (args) => {
  const { children: Component, ...rest } = args;
  return <Badge {...rest}>{Component}</Badge>;
};

export const Default = Template.bind({});

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <Button>Test</Button>,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'secondary',
};

export const CustomNumber = Template.bind({});
CustomNumber.args = {
  number: 10,
};

export const Dot = Template.bind({});
Dot.args = {
  dot: true,
  skin: 'secondary',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
