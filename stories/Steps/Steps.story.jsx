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


const StyledDiv = styled.div`
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  padding: 15px;
`;

const StepsExample = (
  <Steps>
    <Step title="Criação de conta" icon="person" status="active" />
    <Step title="Plano e forma de pagamento" icon="credit_card" />
    <Step title="Preencher o currículo" icon="description" />
  </Steps>
);

const stories = storiesOf('10. Steps', module);

stories
  .add('Steps', () => (
    <Heading name="Steps" image={Atom} title="<Steps />">
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Steps, Step" />

          <StyledDiv>
            <p>We provide two components to use Steps.</p>
            <p><code>{ '<Steps>' }</code> and <code>{ '<Step title="Example">' }</code> must be used together.</p>
          </StyledDiv>

          <h4>Steps</h4>
          <Row>
            <Col phone={6}>
              <CodeExample
                component={StepsExample}
                showTitle={false}
              />
            </Col>

            <Col phone={6}>
              <Wrapper>
                { StepsExample }
              </Wrapper>
            </Col>
          </Row>

        </Tab>
        <Tab title="API">
          <AutoExample
            component={Step}
            title="Step"
            componentProps={{
              title: 'Example',
              icon: 'person',
            }}
          />
          <AutoPropsApi component={Steps} title="Steps" />
        </Tab>
      </TabbedView>
    </Heading>
  ));
