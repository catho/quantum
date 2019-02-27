import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';
import Toggle from '../../components/Toggle';

storiesOf('Forms', module).add('Toggle', () => (
  <AutoExample component={Toggle} />
));
