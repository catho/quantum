import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Grid from './Grid';
import Formula from '../../.storybook/static/formula.svg';

storiesOf('1. Foundation', module)
  .add('Grid System', () => (
    <Heading name="Grid" image={Formula} title="Grid">
      <Grid />
    </Heading>
  ));

