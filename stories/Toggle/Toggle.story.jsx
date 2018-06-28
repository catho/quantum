import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Toggle from '../../components/Toggle';

storiesOf('3. Forms', module).add('Toggle', () => (
  <AutoExample component={Toggle} />
));
