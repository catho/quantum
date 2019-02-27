import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho-private/quantum-storybook-ui';
import Colors from './Colors';

storiesOf('Foundation', module).add('Color Palette', () => (
  <Heading name="Colors" title="Color Palette">
    <Colors />
  </Heading>
));
