
import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Range from '../../components/Range';

storiesOf('3. Forms', module)
  .add('Range', () => (
    <AutoExample component={Range} />
  ));
