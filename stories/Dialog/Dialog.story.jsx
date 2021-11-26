import React from 'react';
import {
  TabbedView,
  Tab,
  AutoPropsApi,
  Heading,
  StoryContainer,
  Title,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';
import { Dialog, Row, Col } from '../../components';
import DialogExample from './DialogExample';

export default {
  title: 'Dialog',
};

export const DialogStory = () => (
  <>
    <Heading name="Dialog">Dialog</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing Dialog</Title>
          <SimpleHighlight>{`import { Dialog } from '@catho/quantum';`}</SimpleHighlight>
          <Row>
            <Col style={{ marginTop: '20px' }}>
              <DialogExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>

      <Tab title="API">
        <AutoPropsApi component={Dialog} ignoredProps={['theme']} />
      </Tab>

      <Tab title="Example">
        <StoryContainer>
          <Title as="h3">Dialog</Title>
          <p>
            Here you can check a simple implamentation using the Dialog
            component.
          </p>
          <Row>
            <Col xsmall={4} small={4} medium={6}>
              <SimpleHighlight>{DialogExample.code}</SimpleHighlight>
            </Col>
            <Col xsmall={4} small={4} medium={6}>
              <DialogExample />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
