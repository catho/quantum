import React from 'react';
import { storiesOf } from '@storybook/react';
import RightPanel from '../../.storybook/decorators/RightPanel';
import Grid from './Grid';

storiesOf('1. Layout', module)
  .addDecorator(RightPanel)
  .add('Grid', () => <Grid />);
