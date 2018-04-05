import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/decorators/Heading';
import Grid from './Grid';

storiesOf('1. Layout', module)
  .addDecorator(Heading)
  .add('Grid', () => <Grid />);
