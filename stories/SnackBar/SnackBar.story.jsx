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
import {
  SnackBarExample,
  SnackBarExamplePrimary,
  SnackBarExampleSuccess,
  SnackBarExampleError,
  SnackBarExampleWarning,
  SnackBarExampleCallback,
} from './examples';

export default {
  title: 'SnackBar',
};

export const SnackBarStory = () => (
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
          <Title as="h1">SnackBar</Title>
          <p>
            Here you can check a simple implamentation using SnackBar component.
          </p>
          <Title as="h3">Simple SnackBar (with action triggers)</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExample />
            </Col>
          </Row>
          <Title as="h3">Primary SnackBar</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExamplePrimary.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExamplePrimary />
            </Col>
          </Row>
          <Title as="h3">Success SnackBar</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExampleSuccess.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExampleSuccess />
            </Col>
          </Row>
          <Title as="h3">Error SnackBar</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExampleError.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExampleError />
            </Col>
          </Row>
          <Title as="h3">Warning SnackBar</Title>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExampleWarning.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExampleWarning />
            </Col>
          </Row>
          <Title as="h3">SnackBar with callback</Title>
          <p>
            Open the browsers console to see de log when the CALLBACK ACTION
            button is pressed
          </p>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{SnackBarExampleCallback.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <SnackBarExampleCallback />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
