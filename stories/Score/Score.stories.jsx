// Generated with scripts/create-componnent.js

import Score from '../../components/Score';

export default {
  title: 'RingGraph/Score',
  component: Score,
};

const Template = (args) => <Score {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 25,
};

export const WithoutRounded = Template.bind({});
WithoutRounded.args = {
  percentage: 55.55,
  round: false,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  percentage: 50,
  skin: 'secondary',
};

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  percentage: 50,
  text: 'de compatibilidade',
};
