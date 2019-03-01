import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho-private/quantum-storybook-ui';
import Colors from './Colors';

storiesOf('Foundation', module).add('Color Palette', () => (
  <>
    <Heading title="Colors">
      Catho's color palette consists of brand, support and neutral accents.
      Blue, Sky should be used as primary colors and Pink as secondary color.
    </Heading>

    <Colors />
  </>
));
