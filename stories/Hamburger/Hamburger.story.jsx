import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Hamburger from '../../components/Hamburger';
import Button from '../../components/Button';
import { colors } from '../../components/shared/theme';
import { Container } from '../../components/Grid';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Default</Title>
        <Example
          component={
            <div>
              <span>Here is a Hamburger</span>
              <Hamburger number={10} />
            </div>
          }
          code={`<div>
  <span>Here is a Hamburger</span>
  <Hamburger number={10} />
</div>`}
        />

        <Title as="h2">With children</Title>
        <Example
          component={
            <Hamburger number={10} skin="primary">
              <Button skin="secondary" size="large" />
            </Hamburger>
          }
          code={`<Hamburger number={10} skin="primary">
  <Button skin="secondary" size="large"/>
</Hamburger>`}
        />

        <Title as="h2">In a colour background</Title>
        <Example
          component={
            <div
              style={{
                backgroundColor: colors.primary['700'],
                display: 'inline-block',
                padding: 10,
                color: colors.neutral['0'],
              }}
            >
              <Hamburger number={10} skin="primary" inverted />
              This is a Hamburger
            </div>
          }
          code={`<div style={{
  backgroundColor: colors.primary['700'],
  display: 'inline-block',
  padding: 10,
  color: Colors.WHITE
}}>
  <Hamburger number={10} skin="white" />This is a Hamburger
</div>`}
        />
      </Container>
    </StoryContainer>
  </Tab>
);

const description = `Hamburgers are used for showing quantity of something, as
warnings, inbox messages and others.`;

storiesOf('Hamburger', module).add('Hamburger', () => (
  <AutoExample
    description={description}
    component={Hamburger}
    componentProps={{
      number: 10,
    }}
    // additionalTabs={TabExample}
  />
));
