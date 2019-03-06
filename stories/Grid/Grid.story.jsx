import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho-private/quantum-storybook-ui';
import Grid from './Grid';

storiesOf('Foundation', module).add('Grid System', () => (
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
));
