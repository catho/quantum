import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';

import Typography from './Typography';

storiesOf('1. Foundation', module).add('Typography', () => (
  <Heading title="Typography">
    <Typography />
  </Heading>
));
