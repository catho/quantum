import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '../../components/Stepper';

const i18n = {
  paginationPreposition: 'de',
  nextWord: 'próximo',
};

storiesOf('Stepper', module)
  .add('Stepper with total 2', () => (
    <div>
      <Stepper
        i18n={i18n}
        isPtBR
        index={1}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={2}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Stepper with total 3', () => (
    <div>
      <Stepper
        i18n={i18n}
        index={1}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={2}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={3}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Stepper with total 4', () => (
    <div>
      <Stepper
        i18n={i18n}
        index={1}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={2}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={3}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={4}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Stepper with total 5', () => (
    <div>
      <Stepper
        i18n={i18n}
        index={1}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={2}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={3}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={4}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={5}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))

  .add('Stepper with total 6', () => (
    <div>
      <Stepper
        i18n={i18n}
        index={1}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={2}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={3}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={4}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        i18n={i18n}
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ));
