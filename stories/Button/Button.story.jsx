import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Button from '../../components/Button';
import { Container, Row, Col } from '../../components/Grid';
import { Tab, Example, AutoExample } from '../../.storybook/components';

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <p>The full catalogue of icons can be found <Button onClick={linkTo('1. Foundation', 'Icons')}>here</Button>.</p>
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
          <Example component={<Button size="big" skin="secondary" icon="block" disabled>Not allowed</Button>} />
        </Col>
        <Col tablet={3}>
          <Example component={<Button size="big" skin="action" icon="play_arrow">Play</Button>} />
        </Col>
      </Row>
    </Container>

    <Container fluid>
      <Example component={<Button full>Full Width</Button>} code="<Button full>Full Width</Button>" />
      <Example component={<Button center skin="action">Centered</Button>} code={'<Button center skin="action">Centered</Button>'} />
    </Container>
  </Tab>
);

storiesOf('2. Buttons', module)
  .add('Button', () => (
    <AutoExample component={Button} additionalTabs={exampleTab} />
  ));
