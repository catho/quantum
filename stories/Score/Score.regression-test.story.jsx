// Generated with scripts/create-componnent.js

import Score from '../../components/Score';

export default {
  title: 'Score',
  component: Score,
};

const Template = (args) => <Score {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 0,
};

export const WithoutRouded = Template.bind({});
WithoutRouded.args = {
  percentage: 55.55,
  round: false,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  percentage: 50,
  skin: 'secondary',
};
