import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import { Skeleton } from '../../components';

const descriptions = {
  progressBar: `Skeleton of loading component.`,
};

storiesOf('Loaders', module).add('Skeleton', () => (
  <AutoExample description={descriptions.progressBar} component={Skeleton} />
));
