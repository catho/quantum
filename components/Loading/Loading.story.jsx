import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Loading from './Loading';

storiesOf('6. Others', module)
  .add('Loading', () => (
    <Heading atom title="Loading">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Loading />} importModules="Loading" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Loading} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
