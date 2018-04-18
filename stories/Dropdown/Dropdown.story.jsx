import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Dropdown from '../../components/Dropdown';
import Atom from '../static/atom.svg';

storiesOf('3. Forms', module)
  .add('Dropdown', () => (
    <Heading image={Atom} title="<Dropdown />">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Dropdown />} importModules="Dropdown" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Dropdown} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
