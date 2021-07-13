import React from 'react';
import { Heading } from '@catho/quantum-storybook-ui';
import Colors from './Colors';

export default {
  title: 'Foundation',
};

export const ColorPalette = () => (
  <>
    <Heading title="Colors">
      Catho&apos;s color palette consists of brand, support and neutral accents.
      All colors are imported by the default theme.
    </Heading>

    <Colors />
  </>
);
