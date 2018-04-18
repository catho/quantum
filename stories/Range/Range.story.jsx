
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Range from '../../components/Range';
import Atom from '../static/atom.svg';

storiesOf('3. Forms', module)
  .add('Range', () => (
    <Heading image={Atom} title="Range">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Range />} importModules="Range" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Range} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
