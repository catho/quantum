import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
} from '@catho-private/quantum-storybook-ui';

import Alert from '../../components/Alert';

const exampleTab = (
  <Tab title="Example">
    <p>You can specify a duration in seconds of the alert element.</p>
    <Title>With 5 seconds of duration</Title>
    <Example
      component={
        <Alert
          show
          type="error"
          duration={5}
          message={{
            title: 'Simple',
            text: 'This is error alert',
          }}
        />
      }
    />
    <p>We have 4 type of alerts:</p>
    <ul>
      <li>Info</li>
      <li>Success</li>
      <li>Warning</li>
      <li>Danger</li>
    </ul>
    <Title>Info</Title>
    <Example
      component={
        <Alert
          show
          type="info"
          message={{
            title: 'Info',
            text: 'This is info alert',
          }}
        />
      }
    />
    <Title>Success</Title>
    <Example
      component={
        <Alert
          show
          type="success"
          message={{
            title: 'Success',
            text: 'This is success alert',
          }}
        />
      }
    />
    <Title>Warning</Title>
    <Example
      component={
        <Alert
          show
          type="warning"
          message={{
            title: 'Warning',
            text: 'This is warning alert',
          }}
        />
      }
    />
    <Title>Error</Title>
    <Example
      component={
        <Alert
          show
          type="error"
          message={{
            title: 'Error',
            text: 'This is error alert',
          }}
        />
      }
    />
  </Tab>
);

storiesOf('Alerts', module).add('Basic', () => (
  <AutoExample component={Alert} additionalTabs={exampleTab} />
));
