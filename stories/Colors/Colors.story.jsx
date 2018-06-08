import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Colors from './Colors';
import Formula from '../../.storybook/static/formula.svg';

storiesOf('1. Foundation', module)
  .add('Color Palette', () => (
    <Heading name="Colors" image={Formula} title="Color Palette">
      <Colors />
    </Heading>
  ));
