import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import { Container, Row, Col } from '../../components/Grid';
import Skeleton from '../../components/Skeleton';
import examples from './examples';

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

const description = 'A component that simulate another while it is loading.';

storiesOf('Skeletons', module).add('Skeleton', () => (
  <AutoExample
    description={description}
    component={Skeleton}
    additionalTabs={tabExample}
  />
));
