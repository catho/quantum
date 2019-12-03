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

import Socials from '../../components/Socials';

storiesOf('Socials', module).add('Socials', () => (
  <>
    <Heading name="Socials">Socials description here</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Socials</Title>
          <SimpleHighlight>{`import { Socials } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }} />
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Socials} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h1">Socials</Title>
          <p>
            Here you can check a simple implamentation using Socials component.
          </p>
          <Title as="h3">Simple Socials (with action triggers)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{/* code */}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              {/* exemplo de componente */}
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
