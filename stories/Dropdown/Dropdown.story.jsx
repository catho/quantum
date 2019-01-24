import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import Dropdown from '../../components/Dropdown';

storiesOf('3. Forms', module).add('Dropdown', () => (
  <AutoExample
    component={Dropdown}
    componentProps={{
      items: [
        { value: 'SP', item: 'São Paulo' },
        { value: 'MG', item: 'Minas Gerais' },
        { value: 'FE', item: 'Fortaleza' },
      ],
    }}
  />
));
