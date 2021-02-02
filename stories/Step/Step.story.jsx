import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components';

import Step from '../../components/Step';

storiesOf('Step', module).add('Step', () => (
  <>
    <Heading name="Step">Step component is used update status.</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Step</Title>
          <SimpleHighlight>{`import { Step } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }} />
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Step} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h1">Step</Title>
          <p>
            Here you can check a simple implamentation using Step component.
          </p>
          <Title as="h3">Step of (1 of 3)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {"<Step step='1' allSteps='3' />"}
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <Step />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
