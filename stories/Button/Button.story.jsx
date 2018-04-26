import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Button from '../../components/Button';

storiesOf('2. Buttons', module)
  .add('Button', () => (
    <AutoExample component={Button} />
  ));
