import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Dropdown from '../../components/Dropdown';

storiesOf('3. Forms', module).add('Dropdown', () => (
  <AutoExample
    component={Dropdown}
    componentProps={{
      items: [
        { key: 'fooKey', value: 'foo' },
        { key: 'barKey', value: 'bar' },
        { key: 'bazKey', value: 'baz' },
      ],
    }}
  />
));
