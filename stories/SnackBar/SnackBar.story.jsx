import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import SnackBar from '../../components/SnackBar';

storiesOf('SnackBar', module).add('SnackBar', () => (
  <AutoExample component={SnackBar} />
));
