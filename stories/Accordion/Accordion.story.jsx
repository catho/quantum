import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import mockedProps from '../../components/Accordion/mock';

import { Accordion, Container, Row, Col } from '../../components';
import accordionExamples from './examples';

const description = 'Accordion';
const renderExampleTab = componentExamples => (
  <Tab title="Example">
    <Container>
      {componentExamples.map(example => (
        <Row key={example.code}>
          <Col xsmall={2} small={4} medium={6}>
            <SimpleHighlight>{example.code}</SimpleHighlight>
          </Col>
          <Col xsmall={2} small={4} medium={6}>
            {example.component}
          </Col>
        </Row>
      ))}
    </Container>
  </Tab>
);

storiesOf('Accordion', module).add('Accordion', () => (
  <AutoExample
    description={description}
    component={Accordion}
    componentProps={mockedProps}
    additionalTabs={renderExampleTab(accordionExamples)}
  />
));
