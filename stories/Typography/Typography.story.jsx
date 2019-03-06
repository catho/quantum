import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, TabbedView, Tab } from '@catho-private/quantum-storybook-ui';

import Usage from './Usage';
import Components from './Components';

storiesOf('Foundation', module).add('Typography', () => (
  <>
    <Heading title="Typography">
      Nunito Sans is the standard typeface for Catho on the web
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
