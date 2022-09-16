import ProgressBar from '../../components/ProgressBar';

const Template = args => <ProgressBar {...args} />;

export const Default = Template.bind({});

export const WithProgressPercent = Template.bind({});
WithProgressPercent.args = {
  progressPercent: 30,
};

export const WithProgressText = Template.bind({});
WithProgressText.args = {
  progressText: 'percent to finish ',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: ' seconds to finish',
};
