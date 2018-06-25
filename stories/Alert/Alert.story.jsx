import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Alert from '../../components/Alert';
import { Tab, Example, Title } from '../../.storybook/components';

const exampleTab = (
  <Tab title="Example">
    <p>You can specify a duration in seconds of the alert element.</p>
    <Title>With 5 seconds of duration</Title>
    <Example component={
      <Alert
        message={{
          title: 'Simple',
          text: 'This is error alert',
          type: 'error',
        }}
        show
        duration={5}
      />}
    />
    <p>We have 4 type of alerts:</p>
    <ul>
      <li>Info</li>
      <li>Success</li>
      <li>Warning</li>
      <li>Danger</li>
    </ul>
    <Title>Info</Title>
    <Example component={
      <Alert
        message={{
          title: 'Info',
          text: 'This is info alert',
          type: 'info',
        }}
        show
      />}
    />
    <Title>Success</Title>
    <Example component={
      <Alert
        message={{
          title: 'Success',
          text: 'This is success alert',
          type: 'success',
        }}
        show
      />}
    />
    <Title>Warning</Title>
    <Example component={
      <Alert
        message={{
          title: 'Warning',
          text: 'This is warning alert',
          type: 'warning',
        }}
        show
      />}
    />
    <Title>Error</Title>
    <Example component={
      <Alert
        message={{
          title: 'Error',
          text: 'This is error alert',
          type: 'error',
        }}
        show
      />}
    />
  </Tab>
);

storiesOf('4. Alerts', module)
  .add('Basic', () => (
    <AutoExample component={Alert} additionalTabs={exampleTab} />
  ));
