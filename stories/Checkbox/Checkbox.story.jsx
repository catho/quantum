import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';
import Checkbox from '../../components/Checkbox';

storiesOf('3. Forms', module).add('Checkbox', () => (
  <AutoExample component={Checkbox} />
));
