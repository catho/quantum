import { ProgressBar } from '../../components';

const progressPercent = 25;
const progressText = 25;
const label = '% percent to finish';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

const Template = args => (
  <ProgressBar
    progressPercent={progressPercent}
    progressText={progressText}
    {...args}
  />
);

export const Neutral = Template.bind({});
Neutral.args = {
  skin: 'neutral',
};

export const NeutralWithLabel = Template.bind({});
NeutralWithLabel.args = {
  ...Neutral.args,
  label,
};

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
  skin: 'primary',
  label,
};

export const SecondaryWithLabel = Template.bind({});
SecondaryWithLabel.args = {
  skin: 'secondary',
  label,
};

export const PrimaryWithDifferentValuesAndPercent = Template.bind({});
PrimaryWithDifferentValuesAndPercent.args = {
  skin: 'primary',
  progressText: 305,
  label: ' files loaded from 1220 total',
};
