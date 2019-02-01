import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';

import Loading from '../../components/Loading';

storiesOf('13. Others', module).add('Loading', () => (
  <AutoExample component={Loading} />
));
