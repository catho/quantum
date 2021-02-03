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

import Stepper from '../../components/Stepper';

storiesOf('Stepper', module).add('Stepper', () => (
  <>
    <Heading name="Stepper">
      The stepper component is used to update the progress status using logical
      and numbered steps.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Stepper</Title>
          <SimpleHighlight>{`import { Stepper } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }} />
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Stepper} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h1">Stepper</Title>
          <p>
            Here you can check a simple implamentation using Stepper component.
          </p>
          <Title as="h3">Stepper of (1 of 6)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {
                  "<Stepper index={1} total={6} title='Stepper title' description='Stepper description' />"
                }
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <Stepper
                index={1}
                total={3}
                title="Stepper title"
                description="Stepper description"
              />
            </Col>
          </Row>
          <Title as="h3">Stepper of (3 of 6) without description</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {"<Stepper index={3} total={6} title='Stepper title' />"}
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <Stepper index={5} total={6} title="Stepper title" />
            </Col>
          </Row>
          <Title as="h3">Stepper of (3 of 5) without description</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>
                {"<Stepper index={3} total={5} title='Stepper title' />"}
              </SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <Stepper index={1} total={4} title="Stepper title" />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
