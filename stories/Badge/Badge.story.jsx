import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Badge from '../../components/Badge';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import { Container } from '../../components/Grid';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Default</Title>
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

        <Title as="h2">With children</Title>
        <Example
          component={
            <Badge number={10} skin="primary">
              <Button skin="secondary" size="large" />
            </Badge>
          }
          code={`<Badge number={10} skin="primary">
  <Button skin="secondary" size="large"/>
</Badge>`}
        />

        <Title as="h2">In a colour background</Title>
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
              <Badge number={10} skin="primary" inverted />
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
    </StoryContainer>
  </Tab>
);

const description = `Badges are used for showing quantity of something, as
warnings, inbox messages and others.`;

storiesOf('Badge', module).add('Badge', () => (
  <AutoExample
    description={description}
    component={Badge}
    componentProps={{
      number: 10,
    }}
    additionalTabs={TabExample}
  />
));
