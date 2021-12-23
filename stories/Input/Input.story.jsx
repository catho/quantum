import React from 'react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import { Container, Row, Col } from '../../components/Grid';
import examples, { skinDark } from './examples';
import { colors } from '../../components/shared/theme';

import Input from '../../components/Input';
import Alert from '../../components/Alert/Alert';

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
      <Row key="skin-dark-alert">
        <Col>
          <Alert icon="warning" skin="warning">
            The use of dark skin in input should be applied to backgrounds that
            have a high level of contrast for accessibility and reading
            purposes, so use it with a Primary 700 theme or higher in contrast
            level, avoid light backgrounds.
          </Alert>
        </Col>
      </Row>
      <Row key="skin-dark">
        <Col xsmall={2} small={4} medium={6}>
          <SimpleHighlight>{skinDark.code}</SimpleHighlight>
        </Col>
        <Col
          xsmall={2}
          small={4}
          medium={6}
          style={{ background: colors.primary[700] }}
        >
          {skinDark.component}
        </Col>
      </Row>
    </Container>
  </Tab>
);

export default {
  title: 'Forms',
};

const description =
  'The Input component is used to create interactive controls for web-based forms in order to accept data from the user.';

export const InputStory = () => (
  <>
    <AutoExample
      description={description}
      component={Input}
      componentProps={{
        id: 'example',
        name: 'example',
        label: 'Example',
      }}
      additionalTabs={tabExample}
    />
  </>
);
