import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Loading from '../../components/Loading';

storiesOf('6. Others', module)
  .add('Loading', () => (
    <AutoExample component={Loading} />
  ));
