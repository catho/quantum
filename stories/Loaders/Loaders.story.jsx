import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import { CircularLoader } from '../../components';

const descriptions = {
  circularLoader: `CircularLoaders are used to give the user the impression of loading while a component is not ready to be displayed.`,
};

storiesOf('Loaders', module).add('CircularLoader', () => (
  <AutoExample
    description={descriptions.circularLoader}
    component={CircularLoader}
  />
));
