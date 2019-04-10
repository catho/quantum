import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Popover from '../../components/Popover';
import { Container } from '../../components/Grid';
import PopoverExampleTop from './examples/PopoverExampleTop';
import PopoverExampleLeft from './examples/PopoverExampleLeft';
import PopoverExampleBottom from './examples/PopoverExampleBottom';
import PopoverExampleRight from './examples/PopoverExampleRight';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Popover top (default color)</Title>
        <Example
          component={<PopoverExampleTop />}
          code={PopoverExampleTop.code}
        />
      </Container>
    </StoryContainer>
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Popover left (success color)</Title>
        <Example
          component={<PopoverExampleLeft />}
          code={PopoverExampleLeft.code}
        />
      </Container>
    </StoryContainer>
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Popover bottom (warning color)</Title>
        <Example
          component={<PopoverExampleBottom />}
          code={PopoverExampleBottom.code}
        />
      </Container>
    </StoryContainer>
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Popover right (error color)</Title>
        <Example
          component={<PopoverExampleRight />}
          code={PopoverExampleRight.code}
        />
      </Container>
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
      children: 'Popover me',
      text:
        'Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec.',
    }}
    additionalTabs={TabExample}
  />
));
