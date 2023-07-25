import ProgressBar from '../../components/ProgressBar';

export default {
  title: 'Loaders/ProgressBar',
  component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});

export const WithProgressPercent = Template.bind({});
WithProgressPercent.args = {
  progressPercent: 30,
};

export const WithProgressText = Template.bind({});
WithProgressText.args = {
  progressText: 1,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: ' seconds to finish',
};
