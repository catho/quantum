import React from 'react';
import { storiesOf } from '@storybook/react';
import Introduction from './Introduction';
import Heading from '../../.storybook/components/Heading';
import Logo from '../../.storybook/static/logo.svg';

storiesOf('Introduction', module).add('Getting started', () => (
  <Heading image={Logo} title="Quantum">
    <Introduction />
  </Heading>
));
