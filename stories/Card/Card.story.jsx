import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  CodeExample,
  Title,
} from '@catho-private/quantum-storybook-ui';

import { Col, Row } from '../../components/Grid';
import Card from '../../components/Card';

const simpleCardSample = (
  <Card>
    <Card.Header>
      <Card.Thumbnail rounded src="http://i.pravatar.cc/72" alt="" />
      <Card.HeaderText>
        <Card.Title small>Title</Card.Title>
        <Card.SubTitle>Subtitle</Card.SubTitle>
      </Card.HeaderText>
    </Card.Header>
    <Card.Media src="http://placekitten.com/g/400" alt="" />
    <Card.Content>Content</Card.Content>
    <Card.Footer>Footer</Card.Footer>
  </Card>
);

storiesOf('9. Card', module).add('Card', () => (
  <Heading name="Card">
    <h2>Simple card</h2>
    <Row>
      <Col xsmall={4} small={4} medium={6}>
        <CodeExample component={simpleCardSample} />
      </Col>

      <Col xsmall={4} small={4} medium={6}>
        <Title>Preview</Title>
        {simpleCardSample}
      </Col>
    </Row>
  </Heading>
));
