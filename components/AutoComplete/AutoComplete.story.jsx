
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import AutoComplete from './AutoComplete';

storiesOf('5. AutoComplete', module)
  .add('AutoComplete', () => (
    <Heading atom title="AutoComplete">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<AutoComplete />} importModules="AutoComplete" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={AutoComplete} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
