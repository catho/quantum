import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho/quantum-storybook-ui';
import Logo from '../../.storybook/static/logo.svg';
import Introduction from './Introduction';

storiesOf('Introduction', module).add('Getting started', () => (
  <>
    <Heading title="Quantum" image={Logo}>
      CSS in JS based reusable components, are the core of Quantum
      design-system: a library for developing consistent UI/UX at Catho.
    </Heading>

    <Introduction />
  </>
));
