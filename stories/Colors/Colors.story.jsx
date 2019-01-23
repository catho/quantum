import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';
import Colors from './Colors';

storiesOf('1. Foundation', module).add('Color Palette', () => (
  <Heading name="Colors" title="Color Palette">
    <Colors />
  </Heading>
));
