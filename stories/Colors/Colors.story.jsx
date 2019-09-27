import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';
import Colors from './Colors';

storiesOf('Foundation', module).add('Color Palette', () => (
  <>
    <Heading title="Colors">
      Catho&apos;s color palette consists of brand, support and neutral accents.
      All colors are imported by the default theme.
    </Heading>

    <Colors />
  </>
));
