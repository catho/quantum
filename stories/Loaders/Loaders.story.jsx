import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample, Tab, SimpleHighlight } from '@catho/quantum-storybook-ui';
import { ProgressBarExample, CircularLoaderExample } from './Examples';

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

const renderExampleTab = examples => (
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
    </Container>
  </Tab>
);

storiesOf('Loaders', module)
  .add('ProgressBar', () => (
    <AutoExample
      description={descriptions.progressBar}
      component={ProgressBar}
      additionalTabs={renderExampleTab(ProgressBarExample)}
    />
  ))
  .add('CircularLoader', () => (
    <AutoExample
      description={descriptions.circularLoader}
      component={CircularLoader}
      additionalTabs={renderExampleTab(CircularLoaderExample)}
    />
  ));
