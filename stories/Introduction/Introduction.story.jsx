import React from 'react';
import { storiesOf } from '@storybook/react';
import Introduction from './Introduction';
import Heading from '../../.storybook/components/Heading';
import Logo from '../static/logo.svg';
import Steps from '../../components/Steps';
import Step from '../../components/Steps/sub-components/Step';

storiesOf('Introduction', module)
  .add('Getting started', () => (
    <Heading image={Logo} title="StyleGuide">
      <Introduction />
    </Heading>
  ))
  .add('Steps', () => (
    <Steps>
      <Step title="Criação de conta" icon="person" status="done" />
      <Step title="Plano Forma de pagamento" icon="credit_card" status="active" />
      <Step title="Preencher o currículo" icon="description" />
      <Step title="Step 4" icon="description" />
    </Steps>
  ));
