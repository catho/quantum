import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '../../components/Stepper';

storiesOf('Stepper', module)
  .add('Mobile: total 2', () => (
    <div>
      <Stepper
        isMobile
        index={1}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={2}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Mobile: total 3', () => (
    <div>
      <Stepper
        isMobile
        index={1}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={2}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={3}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Mobile: total 4', () => (
    <div>
      <Stepper
        isMobile
        index={1}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={2}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={3}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={4}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Mobile: total 5', () => (
    <div>
      <Stepper
        isMobile
        index={1}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={2}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={3}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={4}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={5}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))

  .add('Mobile: total 6', () => (
    <div>
      <Stepper
        isMobile
        index={1}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={2}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={3}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={4}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        isMobile
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))

  .add('Desktop: total 2', () => (
    <div>
      <Stepper
        index={1}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={2}
        total={2}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Desktop: total 3', () => (
    <div>
      <Stepper
        index={1}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={2}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={3}
        total={3}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Desktop: total 4', () => (
    <div>
      <Stepper
        index={1}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={2}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={3}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={4}
        total={4}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))
  .add('Desktop: total 5', () => (
    <div>
      <Stepper
        index={1}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={2}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={3}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={4}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={5}
        total={5}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ))

  .add('Desktop: total 6', () => (
    <div>
      <Stepper
        index={1}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={2}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={3}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={4}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={5}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
      <Stepper
        index={6}
        total={6}
        currentStepText="Salários / benefícios"
        nextStepText="Contrato / Local"
      />
    </div>
  ));
