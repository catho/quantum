import React from 'react';
import {
  AutoPropsApi,
  Heading,
  TabbedView,
  Tab,
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';

import { Row, Col } from '../../components/Grid';
import Popover from '../../components/Popover';
import examples from './examples/examples';

export default {
  title: 'Popover',
};

export const _Popover = () => (
  <>
    <Heading name="Popover">
      Popovers are used for showing quantity of something, as warnings, inbox
      messages and others.
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing and using</Title>
          <SimpleHighlight>{`
          import { Popover, Button } from '@catho/quantum';

          <Popover
            trigger={<Button>This is a Popover top example</Button>}
            onClose={() => console.log('onClose prop triggered')}
          >
            Here comes a new Popover Top example
          </Popover>
        `}</SimpleHighlight>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Popover} />
      </Tab>
      <Tab title="Examples">
        <StoryContainer>
          <Title as="h2">Examples</Title>
          {examples.map(example => (
            <Row key={example.code}>
              <Col xsmall={4} small={8} medium={6}>
                <SimpleHighlight>{example.code}</SimpleHighlight>
              </Col>
              <Col xsmall={4} small={8} medium={6}>
                {example.component}
              </Col>
            </Row>
          ))}
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
);
