import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';
import Heading from '../../.storybook/decorators/Heading';

storiesOf('1. Layout', module)
  .addDecorator(Heading)
  .add('Typography', () => <Typography />);
