import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
} from '@catho-private/quantum-storybook-ui';

import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import { Container } from '../../components/Grid';

const TabExample = (
  <Tab title="Examples">
    <Container fluid>
      <Title>Default</Title>
      <Example
        component={
          <div>
            <span>Here is a badge</span>
            <Badge number={10} />
          </div>
        }
        code={`<div>
  <span>Here is a badge</span>
  <Badge number={10} />
</div>`}
      />

      <Title>With children</Title>
      <Example
        component={
          <Badge number={10} skin="blue">
            <Button skin="action" size="large" />
          </Badge>
        }
        code={`<Badge number={10} skin="blue">
  <Button skin="action" size="large"/>
</Badge>`}
      />

      <Title>In a colour background</Title>
      <Example
        component={
          <div
            style={{
              backgroundColor: Colors.BLUE[500],
              display: 'inline-block',
              padding: 10,
              color: Colors.WHITE,
            }}
          >
            <Badge number={10} skin="white" />
            This is a badge
          </div>
        }
        code={`<div style={{
  backgroundColor: Colors.BLUE[500],
  display: 'inline-block',
  padding: 10,
  color: Colors.WHITE
}}>
  <Badge number={10} skin="white" />This is a badge
</div>`}
      />
    </Container>
  </Tab>
);

storiesOf('15. Badge', module).add('Badge', () => (
  <AutoExample
    component={Badge}
    componentProps={{
      number: 10,
    }}
    additionalTabs={TabExample}
  />
));
