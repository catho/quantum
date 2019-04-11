import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components';
import SnackBar from '../../components/SnackBar';
import SnackBarExample from './examples/SnackBarExample';

storiesOf('SnackBar', module).add('SnackBar', () => (
  <>
    <Heading name="SnackBar">
      SnackBars are used to give a actions support that have just been maded:
      delete or archive content by accident (undo), resend messages that not
      been sended for any reason or try to reconnect to internet (retry).
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing SnackBar</Title>
          <SimpleHighlight>{`import { SnackBar } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }}>
              <SnackBarExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={SnackBar} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">SnackBar</Title>
          <p>
            Here you can check a simple implamentation using SnackBar component.
          </p>

          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExample text="SnackBar text content" />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
