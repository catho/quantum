import React from 'react';
import { Heading, TabbedView, Tab } from '@catho/quantum-storybook-ui';

import Usage from './Usage';
import Components from './Components';

export default {
  title: 'Foundation',
};

export const Typography = () => (
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
);
