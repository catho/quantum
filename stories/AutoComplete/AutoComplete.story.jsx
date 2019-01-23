import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';

import AutoComplete from '../../components/AutoComplete';

storiesOf('3. Forms', module).add('Auto Complete', () => (
  <AutoExample
    component={AutoComplete}
    componentProps={{
      dataSource: ['Brazil', 'Germany', 'Mexico', 'Usa'],
      label: 'Example',
    }}
  />
));
