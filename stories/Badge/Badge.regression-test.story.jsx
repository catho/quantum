import Badge from '../../components/Badge';
import Icon from '../../components/Icon';

export default {
  title: 'Badge',
  component: Badge,
};

const Template = (args) => {
  const { children, number = 10, ...otherArgs } = args;
  return (
    <Badge number={number} {...otherArgs}>
      {children}
    </Badge>
  );
};

export const Default = Template.bind({});

export const HighNumber = Template.bind({});
HighNumber.args = {
  number: 110,
};

export const SkinPrimary = Template.bind({});
SkinPrimary.args = {
  skin: 'primary',
};

export const SkinSecondary = Template.bind({});
SkinSecondary.args = {
  skin: 'secondary',
};

export const SkinSuccess = Template.bind({});
SkinSuccess.args = {
  skin: 'success',
};

export const SkinError = Template.bind({});
SkinError.args = {
  skin: 'error',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Dot = Template.bind({});
Dot.args = {
  skin: 'secondary',
  number: 9999,
  dot: true,
  children: <Icon name="date_range" />,
};
