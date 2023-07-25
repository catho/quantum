import { ChargeBar } from '../../components';

const progressPercent = 75;
const label = 'Nível de segurança';

export default {
  title: 'ChargeBar',
  component: ChargeBar,
};

const Template = (args) => <ChargeBar {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  skin: 'neutral',
  progressPercent,
};

export const Primary = Template.bind({});
Primary.args = {
  skin: 'primary',
  progressPercent,
};

export const Success = Template.bind({});
Success.args = {
  skin: 'success',
  progressPercent: 45,
};

export const Secondary = Template.bind({});
Secondary.args = {
  skin: 'secondary',
  progressPercent,
  label,
};
