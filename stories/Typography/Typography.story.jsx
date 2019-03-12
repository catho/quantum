import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, TabbedView, Tab } from '@catho-private/quantum-storybook-ui';

import Usage from './Usage';
import Components from './Components';

storiesOf('Foundation', module).add('Typography', () => (
  <>
    <Heading title="Typography">
      Typography - Quantum uses Nunito Sans as the standard typeface to present
      our design and content as clearly and efficiently as possible.
    </Heading>

    <TabbedView>
      <Tab title="Usage">
        <Usage />
      </Tab>
      <Tab title="Components">
        <Components />
      </Tab>
    </TabbedView>
  </>
));
