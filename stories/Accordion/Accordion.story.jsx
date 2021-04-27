import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import mockedProps, { mockCode } from '../../components/Accordion/mock';

import { Accordion, Container, Row, Col } from '../../components';
import accordionExamples from './examples';

const description =
  "An accordion is a vertical stack of interactive headings used to toggle the display of further information; each item can be 'collapsed', with just a short label visible, or 'expanded' to show the complete content.";
const renderExampleTab = componentExamples => (
  <Tab title="Example">
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
        {' '}
        passing this object to the items prop, the component will render this
        way:{' '}
      </h4>
    </Container>
    <Container no-gutters>
      {componentExamples.map(example => (
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
);

storiesOf('Accordion', module).add('Accordion', () => (
  <AutoExample
    description={description}
    component={Accordion}
    componentProps={mockedProps}
    additionalTabs={renderExampleTab(accordionExamples)}
  />
));
