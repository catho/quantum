import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho-private/quantum-storybook-ui';
import Grid from './Grid';

storiesOf('Foundation', module).add('Grid System', () => (
  <Heading name="Grid" title="Grid">
    <Grid />
  </Heading>
));
