import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoExample from '../../.storybook/components/AutoExample';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import HowToImport from '../../.storybook/components/HowToImport';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import { Col, Row } from '../../components/Grid';
import CodeExample from '../../.storybook/components/CodeExample';
import Atom from '../static/atom.svg';
import { Steps, Step } from '../../components/Steps';

const StepsExample = (
  <Tab title="Examples">
    <h2>With 3 steps</h2>
    <Steps>
      <Step title="Criação de conta" icon="person" status="active" />
      <Step title="Plano e forma de pagamento" icon="credit_card" />
      <Step title="Preencher o currículo" icon="description" />
    </Steps>
  </Tab>
);

const stories = storiesOf('10. Steps', module);
stories
  .add('Steps', () => (
    <AutoExample
      component={Step}
      componentProps={{
        title: 'Example',
        icon: 'person',
      }}
      additionalTabs={StepsExample}
    />
  ));
