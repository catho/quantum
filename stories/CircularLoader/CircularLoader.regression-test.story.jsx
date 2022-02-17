import { CircularLoader } from '../../components';

export default {
  title: 'CircularLoader',
  component: CircularLoader,
};

const Template = args => <CircularLoader {...args} />;

export const Default = Template.bind({});

export const SecondarySkin = Template.bind({});
SecondarySkin.args = {
  skin: 'secondary',
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: 'medium',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: 'large',
};

export const XLargeSize = Template.bind({});
XLargeSize.args = {
  size: 'xlarge',
};

export const XXLargeSize = Template.bind({});
XXLargeSize.args = {
  size: 'xxlarge',
};

export const XXXLargeSize = Template.bind({});
XXXLargeSize.args = {
  size: 'xxxlarge',
};
