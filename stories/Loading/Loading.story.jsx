import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Loading from '../../components/Loading';
import Atom from '../static/atom.svg';

storiesOf('6. Others', module)
  .add('Loading', () => (
    <Heading image={Atom} title="<Loading />">
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
