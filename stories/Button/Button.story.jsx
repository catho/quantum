import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';
import { Container, Row, Col } from '../../components/Grid';

const exampleTab = (
  <Tab title="Example">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Full width button</Title>
        <Example
          component={<Button full>Full Width</Button>}
          code="<Button full>Full Width</Button>"
        />

        <Title as="h2">Centered button</Title>
        <Example
          component={
            <Button icon="face" center skin="success">
              Centered
            </Button>
          }
          code={'<Button center skin="success">Centered</Button>'}
        />

        <Title as="h2">Secondary</Title>
        <Example
          component={<Button skin="secondary">click here</Button>}
          code={'<Button skin="secondary">click here</Button>'}
        />
      </Container>

      <Container fluid>
        <Title as="h2">Button with icons</Title>
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
                <Button skin="error" icon="camera">
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
                <Button size="large" skin="warning" icon="play_arrow">
                  Play
                </Button>
              }
            />
          </Col>
        </Row>
      </Container>
    </StoryContainer>
  </Tab>
);

const socialExampleTab = (
  <Tab title="Example">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Google button</Title>
        <Example
          component={<SocialButton provider="google" />}
          code="<SocialButton provider='google' />"
        />

        <Title as="h2">Facebook button</Title>
        <Example
          component={<SocialButton provider="facebook" />}
          code={"<SocialButton provider='facebook' />"}
        />
      </Container>
    </StoryContainer>
  </Tab>
);

const description = `Buttons express what action will occur when the user clicks
or touches it. Buttons are used to initialize an action, either in the
background or foreground of an experience.
`;

storiesOf('Buttons', module)
  .add('Button', () => (
    <>
      <AutoExample
        description={description}
        component={Button}
        componentProps={{
          children: 'Catho',
        }}
        additionalTabs={exampleTab}
      />
    </>
  ))
  .add('SocialButton', () => (
    <>
      <AutoExample
        description={description}
        component={SocialButton}
        componentProps={{
          provider: 'facebook',
        }}
        additionalTabs={socialExampleTab}
      />
    </>
  ));
