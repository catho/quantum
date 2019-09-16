import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import { ProgressBarExample } from './Examples';

import {
  ProgressBar,
  CircularLoader,
  Container,
  Row,
  Col,
} from '../../components';

const descriptions = {
  progressBar: `Progress bars are used to give the user a feedback to the progress of a process or an action.`,
  circularLoader: `CircularLoaders are used to give the user the impression of loading while a component is not ready to be displayed.`,
};

const progressBarExamplesTab = (
  <Tab title="Example">
    <Container>
      {ProgressBarExample.map(example => (
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

storiesOf('Loaders', module)
  .add('ProgressBar', () => (
    <AutoExample
      description={descriptions.progressBar}
      component={ProgressBar}
      additionalTabs={progressBarExamplesTab}
    />
  ))
  .add('CircularLoader', () => (
    <AutoExample
      description={descriptions.circularLoader}
      component={CircularLoader}
    />
  ));
