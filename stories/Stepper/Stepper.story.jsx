import React from 'react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
import { colors, baseFontSize, spacing } from '../../components/shared/theme';
import Stepper from '../../components/Stepper';
import { Container } from '../../components/Grid';

const i18nEsp = {
  paginationPreposition: 'en',
  nextWord: 'Siguiente',
};

const exampleTab = (
  <Tab title="Example">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">using i18n with spanish</Title>
        <Example
          component={
            <Stepper
              i18n={i18nEsp}
              index={2}
              total={6}
              currentStepText="Salarios / beneficios"
              nextStepText="Contrato / sitio"
            />
          }
          code={
            "<Stepper i18n={{ paginationPreposition: 'en', nextWord: 'Siguiente' }} index={2} total={6} currentStepText='Salarios / beneficios' nextStepText='Contrato / sitio' />}"
          }
        />
      </Container>
    </StoryContainer>
  </Tab>
);

export default {
  title: 'Stepper',
};

export const _Stepper = () => (
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
      }}
      additionalTabs={exampleTab}
    />
  </>
);
