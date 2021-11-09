import React from 'react';
import { ChargeBar } from '../../components';

const progressPercent = 75;
const progressText = 75;
// const label = '% percent to finish';

export default {
  title: 'ChargeBar',
  component: ChargeBar,
};

const Template = args => (
  <ChargeBar
    {...args}
  />
);

export const Neutral = Template.bind({});
Neutral.args = {
  skin: 'primary',
  progressPercent,
  progressText,


};

// export const NeutralWithLabel = Template.bind({});
// NeutralWithLabel.args = {
//   ...Neutral.args,
//   label,
// };

// export const PrimaryWithLabel = Template.bind({});
// PrimaryWithLabel.args = {
//   skin: 'primary',
//   label,
// };

// export const SecondaryWithLabel = Template.bind({});
// SecondaryWithLabel.args = {
//   skin: 'secondary',
//   label,
// };

// export const PrimaryWithDifferentValuesAndPercent = Template.bind({});
// PrimaryWithDifferentValuesAndPercent.args = {
//   skin: 'primary',
//   progressText: 305,
//   label: ' files loaded from 1220 total',
// };
