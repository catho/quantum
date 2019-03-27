import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import { Container, Row, Col } from '../../components/Grid';
import examples from './examples';

import Input from '../../components/Input';

const tabExample = (
  <Tab title="Example">
    <Container>
      {examples.map(example => (
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

storiesOf('Forms', module).add('Input', () => (
  <>
    <AutoExample
      component={Input}
      componentProps={{
        id: 'example',
        name: 'example',
        label: 'Example',
      }}
      additionalTabs={tabExample}
    />
  </>
));
