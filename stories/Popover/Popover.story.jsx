import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components/Grid';
import Popover from '../../components/Popover';
import examples from './examples';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Title as="h2">Examples</Title>
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
    </StoryContainer>
  </Tab>
);

const description = `Popovers are used for showing quantity of something, as
warnings, inbox messages and others.`;

storiesOf('Popover', module).add('Popover', () => (
  <AutoExample
    description={description}
    component={Popover}
    componentProps={{
      trigger: <span>Click me!</span>,
      children:
        'Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec.',
    }}
    additionalTabs={TabExample}
  />
));
