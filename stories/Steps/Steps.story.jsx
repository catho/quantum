import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import HowToImport from '../../.storybook/components/HowToImport';
import Example from '../../.storybook/components/Example';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import { Col, Row } from '../../components/Grid';
import Button from '../../components/Button';
import CodeExample from '../../.storybook/components/CodeExample';
import Atom from '../static/atom.svg';
import { Steps, Step } from '../../components/Steps';

const StepExample = (
  <Steps>
    <Step title="Criação de conta" icon="person" status="active" />
    <Step title="Plano e forma de pagamento" icon="credit_card" />
    <Step title="Preencher o currículo" icon="description" />
  </Steps>
);

const stories = storiesOf('10. Steps', module);

stories
  .add('Steps', () => (
    <Heading name="Steps" image={Atom}>
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Steps, Step" />
          <p>We provide two components to use steps: <code>{ '<Steps>' }</code> and <code>{ '<Step title="Example">' }</code> must be used together.</p>
          <p>The <code>{ '<Step>' }</code> must have a required title prop and his current status prop, that can be one of:</p>

          <ul>
            <li><code>&nbsp;</code> <small>(empty string)</small></li>
            <li>active</li>
            <li>done</li>
          </ul>

          <p>You can pass an icon to be displayed with the step component, see the example below:</p>
          <small>You can see the list of enable icons <Button onClick={linkTo('1. Foundation', 'Icons')}>here</Button></small>

          <h3>A simple 3 steps component</h3>
          <Row>
            <Col desktop={4} phone={12}>
              <CodeExample component={StepExample} />
            </Col>
            <Col desktop={8} phone={12}>
              {StepExample}
            </Col>
          </Row>
        </Tab>
        <Tab title="API">
          <AutoPropsApi component={Step} title="Step" />
          <AutoPropsApi component={Steps} title="Steps" />
        </Tab>
        <Tab title="Examples">
          <h3>First step active</h3>
          <Example component={
            <Steps>
              <Step title="Criação de conta" icon="person" status="active" />
              <Step title="Plano e forma de pagamento" icon="credit_card" />
              <Step title="Preencher o currículo" icon="description" />
            </Steps>
            }
          />
          <h3>First step done, second step active</h3>
          <Example component={
            <Steps>
              <Step title="Criação de conta" icon="person" status="done" />
              <Step title="Plano e forma de pagamento" status="active" icon="credit_card" />
              <Step title="Preencher o currículo" icon="description" />
            </Steps>
            }
          />
          <h3>First and second steps done, third step active</h3>
          <Example component={
            <Steps>
              <Step title="Criação de conta" icon="person" status="done" />
              <Step title="Plano e forma de pagamento" status="done" icon="credit_card" />
              <Step title="Preencher o currículo" status="active" icon="description" />
            </Steps>
            }
          />
          <h3>All steps done</h3>
          <Example component={
            <Steps>
              <Step title="Criação de conta" icon="person" status="done" />
              <Step title="Plano e forma de pagamento" status="done" icon="credit_card" />
              <Step title="Preencher o currículo" status="done" icon="description" />
            </Steps>
            }
          />
        </Tab>
      </TabbedView>
    </Heading>
  ));
