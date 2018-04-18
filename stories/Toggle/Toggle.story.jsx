import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Toggle from '../../components/Toggle';
import Atom from '../static/atom.svg';

const stories = storiesOf('7. Toggle', module);
stories
  .add('Toggle', () => (
    <Heading image={Atom} title="Toggle">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Toggle id="toggle" />} importModules="Toggle" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Toggle} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
