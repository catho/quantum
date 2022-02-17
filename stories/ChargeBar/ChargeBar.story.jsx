import { AutoExample } from '@catho/quantum-storybook-ui';
import { ChargeBar } from '../../components';

const ChargeBarDescription = `ChargeBar shows the level the user is to be able to complete their stats to the maximum.`;

export default {
  title: 'ChargeBar',
};

export const ChargeBarStory = () => (
  <AutoExample description={ChargeBarDescription} component={ChargeBar} />
);
