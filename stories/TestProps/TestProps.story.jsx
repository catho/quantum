import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import TestProps from '../../components/TestProps'

storiesOf('3. TestProps', module)
  .add('Testing dynamic props', () => (
    <Heading atom title="TestProps">
      <TabbedView>
      <Tab title="Usage">
        <ComponentPanel component={TestProps} importModules={'TestProps'}/>
      </Tab>
      
      <Tab title="API">
        <AutoPropsApi component={TestProps} />
      </Tab>
    </TabbedView>
    </Heading>
  ));
