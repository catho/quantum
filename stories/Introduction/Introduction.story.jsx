import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';

import Introduction from './Introduction';

storiesOf('Introduction', module).add('Getting started', () => (
  <Heading title="Quantum">
    <Introduction />
  </Heading>
));
