import React from 'react';
import { storiesOf } from '@storybook/react';

import Stepper from '../../components/Stepper';

storiesOf('Stepper', module).add('1 of 6: primary', () => (
  <div>
    <Stepper
      isMobile
      index={1}
      total={6}
      currentStepText="Salários / benefícios "
      nextStepText="Contrato / Local Local Local Local Local"
    />
    <Stepper
      index={1}
      total={6}
      currentStepText="Salários / benefícios "
      nextStepText="Contrato / Local Local Local Local Local"
    />
    <Stepper
      index={6}
      total={6}
      currentStepText="Salários / benefícios "
      nextStepText="Contrato / Local Local Local Local Local"
    />
  </div>
));
