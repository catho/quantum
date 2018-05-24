import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../components/Button';
import { Container, Row, Col } from '../../components/Grid';
import { Tab, Example, AutoExample } from '../../.storybook/components';

const exampleTab = (
  <Tab title="Examples">
    <p>
      Some examples with icons. Available icons can be found <a href="/?selectedKind=1.%20Foundation&selectedStory=Icons">here</a>
    </p>
    <Container fluid>
      <Row>
        <Col tablet={3}>
          <Example component={<Button icon="search">Search</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button skin="secondary" icon="sync">Sync</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button skin="cancel" icon="sms">Message</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button skin="action" icon="camera">Screenshot</Button>} />
        </Col>
      </Row>

      <Row>
        <Col tablet={3}>
          <Example component={<Button size="big" icon="card_giftcard">Gift</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button size="big" skin="modal" icon="business_center">Apply</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button size="big" skin="cancel" icon="crop">Crop</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button size="big" skin="action" icon="play_arrow">Play</Button>} />
        </Col>
      </Row>
    </Container>
  </Tab>
);

storiesOf('2. Buttons', module)
  .add('Button', () => (
    <AutoExample component={Button} additionalTabs={exampleTab} />
  ));
