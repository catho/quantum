import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';
import Grid from './Grid';

storiesOf('1. Foundation', module).add('Grid System', () => (
  <Heading name="Grid" title="Grid">
    <Grid />
  </Heading>
));
