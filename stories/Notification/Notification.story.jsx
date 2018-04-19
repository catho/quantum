import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Notification from '../../components/Notification';
import Atom from '../static/atom.svg';

storiesOf('4. Notifications', module)
  .add('Basic', () => (
    <Heading image={Atom} title="<Notification />">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Notification />} importModules="Notification" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Notification} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
