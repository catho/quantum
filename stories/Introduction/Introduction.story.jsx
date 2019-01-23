import React from 'react';
import { storiesOf } from '@storybook/react';
import Introduction from './Introduction';
import { Heading } from '@catho/quantum-storybook-ui';

storiesOf('Introduction', module).add('Getting started', () => (
  <Heading title="Quantum">
    <Introduction />
  </Heading>
));
