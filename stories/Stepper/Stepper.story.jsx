import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  StoryContainer,
  Title,
  SimpleHighlight,
  AutoExample,
} from '@catho/quantum-storybook-ui';

import { colors, baseFontSize, spacing } from '../../components/shared/theme';

import Stepper from '../../components/Stepper';

storiesOf('Stepper', module).add('Stepper', () => (
  <>
    <AutoExample
      description="The stepper component is used to update the progress status using logical
    and numbered steps."
      component={Stepper}
      componentProps={{
        total: 6,
        index: 1,
        skin: 'primary',
        currentStepText: 'Current step',
        nextStepText: 'next step',
        theme: {
          colors,
          baseFontSize,
          spacing,
        },
        isPtBR: false,
      }}
    />
  </>
));
