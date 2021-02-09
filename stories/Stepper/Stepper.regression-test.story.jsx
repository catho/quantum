import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '../../components/Stepper';

storiesOf('Stepper', module).add('1 of 6: primary', () => (
  <div>
    <Stepper
      isMobile
      index={3}
      total={8}
      currentStepText="Salários / benefícios"
      nextStepText="Contrato / Local"
    />
    <Stepper
      index={3}
      total={4}
      currentStepText="Salários / benefícios"
      nextStepText="Contrato / Local "
    />
    <Stepper
      index={7}
      total={7}
      currentStepText="Salários / benefícios"
      nextStepText="Contrato / Local "
    />
  </div>
));
