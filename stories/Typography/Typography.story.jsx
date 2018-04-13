import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';
import Heading from '../../.storybook/components/Heading';

storiesOf('1. Foundation', module)
  .add('Typography', () => (
    <Heading title="Typography">
      <Typography />
    </Heading>
  ));
