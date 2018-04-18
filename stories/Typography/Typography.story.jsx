import React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from './Typography';
import Heading from '../../.storybook/components/Heading';
import Formula from '../static/formula.svg';

storiesOf('1. Foundation', module)
  .add('Typography', () => (
    <Heading image={Formula} title="Typography">
      <Typography />
    </Heading>
  ));
