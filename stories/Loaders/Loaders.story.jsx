import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import { ProgressBar } from '../../components';

const descriptions = {
  progressBar: `Progress bars are used to give the user a feedback to the progress of a process or an action.`,
};

storiesOf('Loaders', module).add('ProgressBar', () => (
  <AutoExample description={descriptions.progressBar} component={ProgressBar} />
));
