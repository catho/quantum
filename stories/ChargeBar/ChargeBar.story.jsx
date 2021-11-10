import React from 'react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import { ChargeBar } from '../../components';

const ChargeBarDescription = `Progress bars are used to give the user a feedback to the progress of a process or an action.`;

export default {
  title: 'ChargeBar',
};

export const ChargeBarStory = () => (
  <AutoExample description={ChargeBarDescription} component={ChargeBar} />
);
