import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
} from '@catho-private/quantum-storybook-ui';
import Toggle from '../../components/Toggle';
import { Container } from '../../components/Grid';

const exampleTab = (
  <Tab title="Example">
    <Container fluid>
      <Title>Left label</Title>
      <Example
        component={
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <label
              htmlFor="left"
              style={{ marginRight: 10, cursor: 'pointer' }}
            >
              Left label with checked true
            </label>
            <Toggle checked id="left" />
          </div>
        }
        code={`<div style={{ display: 'flex', alignContent: 'center' }}>
  <label htmlFor="left" style={{ marginRight: 10 }}>Left label</label>
  <Toggle checked id="left" />
</div>`}
      />
      <Title>Right label</Title>
      <Example
        component={
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <Toggle id="right" />
            <label
              htmlFor="right"
              style={{ marginLeft: 10, cursor: 'pointer' }}
            >
              Right label without checked prop
            </label>
          </div>
        }
        code={`<div style={{ display: 'flex', alignContent: 'center' }}>
  <Toggle id="right" />
  <label htmlFor="right" style={{ marginLeft: 10 }}>Right label</label>
</div>`}
      />
    </Container>
  </Tab>
);

storiesOf('3. Forms', module).add('Toggle', () => (
  <AutoExample component={Toggle} additionalTabs={exampleTab} />
));
