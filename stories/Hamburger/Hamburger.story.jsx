import React from 'react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
  StoryContainer,
} from '@catho/quantum-storybook-ui';

import Hamburger from '../../components/Hamburger';
import { Container } from '../../components/Grid';

const TabExample = (
  <Tab title="Examples">
    <StoryContainer>
      <Container fluid>
        <Title as="h2">Default</Title>
        <Example
          component={
            <div>
              <span>
                Here is a Hamburger: (default / showNotification / opened)
              </span>
              <br />
              <div style={{ backgroundColor: '#000' }}>
                <Hamburger />
                <Hamburger showNotification />
                <Hamburger isOpened />
              </div>
            </div>
          }
          code={`<div>
  <span>
    Here is a Hamburger: (default / showNotification / opened)
  </span>
  <br />
  <div style={{ backgroundColor: '#000' }}>
    <Hamburger />
    <Hamburger showNotification />
    <Hamburger isOpened />
  </div>
</div>`}
        />

        <Title as="h2">Inverted</Title>
        <Example
          component={
            <div>
              <span>
                Here is a Hamburger: (default / showNotification / opened)
              </span>
              <br />
              <div>
                <Hamburger inverted />
                <Hamburger inverted showNotification />
                <Hamburger inverted isOpened />
              </div>
            </div>
          }
          code={`<div>
  <span>
    Here is a Hamburger: (default / showNotification / opened)
  </span>
  <br />
  <div style={{ backgroundColor: '#000' }}>
    <Hamburger />
    <Hamburger showNotification />
    <Hamburger isOpened />
  </div>
</div>`}
        />
      </Container>
    </StoryContainer>
  </Tab>
);

const description = `Hamburger is used for opening mobile menu. You can also pass a aria-label description to inform screen readers that there are new notifications`;

export default {
  title: 'Hamburger',
};

export const _Hamburger = () => (
  <AutoExample
    description={description}
    component={Hamburger}
    additionalTabs={TabExample}
  />
);
