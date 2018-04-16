import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Colors from './Colors';

storiesOf('1. Foundation', module)
  .add('Color Palette', () => (
    <Heading title="Color Palette">
      <Colors />
    </Heading>
  ));
