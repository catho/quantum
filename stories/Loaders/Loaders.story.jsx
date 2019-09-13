import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import { ProgressBar, CircularLoader } from '../../components';

const descriptions = {
  progressBar: `Progress bars are used to give the user a feedback to the progress of a process or an action.`,
  circularLoader: `CircularLoaders are used to give the user the impression of loading while a component is not ready to be displayed.`,
};

storiesOf('Loaders', module)
  .add('ProgressBar', () => (
    <AutoExample
      description={descriptions.progressBar}
      component={ProgressBar}
    />
  ))
  .add('CircularLoader', () => (
    <AutoExample
      description={descriptions.circularLoader}
      component={CircularLoader}
    />
  ));
