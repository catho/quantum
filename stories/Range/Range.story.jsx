import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';

import Range from '../../components/Range';

storiesOf('Forms', module).add('Range', () => (
  <AutoExample component={Range} />
));
