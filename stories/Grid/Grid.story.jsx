import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Grid from './Grid';

storiesOf('1. Layout', module)
  .add('Grid System', () => (
    <Heading title="Grid">
      <Grid />
    </Heading>
  ));

