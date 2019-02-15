import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
} from '@catho-private/quantum-storybook-ui';
import Button from '../../components/Button';
import { Container, Row, Col } from '../../components/Grid';

const ExampleTitle = styled(Title)`
  margin-top: 60px;
`;

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <ExampleTitle>Full width button</ExampleTitle>
      <Example
        component={<Button full>Full Width</Button>}
        code="<Button full>Full Width</Button>"
      />

      <ExampleTitle>Centered button</ExampleTitle>
      <Example
        component={
          <Button icon="face" center skin="action">
            Centered
          </Button>
        }
        code={'<Button center skin="action">Centered</Button>'}
      />

      <ExampleTitle>Link</ExampleTitle>
      <Example
        component={<Button skin="link">click here</Button>}
        code={'<Button skin="link">click here</Button>'}
      />
    </Container>

    <Container fluid>
      <ExampleTitle>Button with icons</ExampleTitle>
      <p>
        The full catalogue of icons can be found{' '}
        <LinkTo kind="1. Foundation" story="Icons">
          here
        </LinkTo>
        .
      </p>
      <Row>
        <Col tablet={3}>
          <Example component={<Button icon="search">Search</Button>} />
        </Col>
        <Col tablet={3}>
          <Example
            component={
              <Button skin="secondary" icon="sync">
                Sync
              </Button>
            }
          />
        </Col>
        <Col tablet={3}>
          <Example
            component={
              <Button skin="action" icon="camera">
                Screenshot
              </Button>
            }
          />
        </Col>
      </Row>

      <Row>
        <Col tablet={3}>
          <Example
            component={
              <Button size="large" icon="card_giftcard">
                Gift
              </Button>
            }
          />
        </Col>
        <Col tablet={3}>
          <Example
            component={
              <Button size="large" skin="secondary" icon="block" disabled>
                Not allowed
              </Button>
            }
          />
        </Col>
        <Col tablet={3}>
          <Example
            component={
              <Button size="large" skin="action" icon="play_arrow">
                Play
              </Button>
            }
          />
        </Col>
      </Row>
    </Container>
  </Tab>
);

storiesOf('2. Buttons', module).add('Button', () => (
  <AutoExample component={Button} additionalTabs={exampleTab} />
));
