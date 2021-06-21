import React from 'react';
import { Heading } from '@catho/quantum-storybook-ui';
import Grid from './Grid';

export default {
  title: 'Foundation',
};

export const GridSystem = () => (
  <>
    <Heading title="Grid">
      This Grid is based on{' '}
      <a href="https://material.io/design/layout/responsive-layout-grid.html">
        Material Design Grid definition
      </a>
      &nbsp;It is adaptable to screen size and orientation and has columns
      definitions to each resolution.
    </Heading>

    <Grid />
  </>
);
