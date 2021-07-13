import React from 'react';
import {
  Heading,
  Tab,
  SimpleHighlight,
  Title,
  StoryContainer,
  AutoPropsApi,
  TabbedView,
} from '@catho/quantum-storybook-ui';
import mockedProps, { mockCode } from '../../components/Accordion/mock';

import { Container, Row, Col, Accordion } from '../../components';
import accordionExamples from './examples';

const description =
  "An accordion is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed', with just a short label visible, or 'expanded' to show the complete content.";

export default {
  title: 'Accordion',
};

export const _Accordion = () => (
  <>
    <Heading name="Accordion">{description}</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Accordion</Title>
          <SimpleHighlight>
            {`import { Accordion } from '@catho/quantum';`}
          </SimpleHighlight>
          <br />
          <Accordion {...mockedProps} keepOnlyOneOpen />
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={Accordion} />
        </StoryContainer>
      </Tab>
      <Tab title="Examples">
        <Container no-gutters>
          <Row key="code-example">
            <Col xsmall={2} small={4} medium={6}>
              <SimpleHighlight>{mockCode}</SimpleHighlight>
            </Col>
            <Col xsmall={2} small={4} medium={6}>
              <h3>Example of Object passed in Items</h3>
              <p> This is a sample of object items passed by Items prop</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <h4>
            passing this object to the items prop, the component will render
            this way:
          </h4>
        </Container>
        <Container no-gutters>
          {accordionExamples.map(example => (
            <Container no-gutters key={example.code}>
              <h4>{example.title}</h4>
              <Row key={example.code}>
                <Col xsmall={2} small={4} medium={6}>
                  <SimpleHighlight>{example.code}</SimpleHighlight>
                </Col>
                <Col xsmall={2} small={4} medium={6}>
                  {example.component}
                </Col>
              </Row>
            </Container>
          ))}
        </Container>
      </Tab>
    </TabbedView>
  </>
);
