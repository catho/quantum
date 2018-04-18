import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Button from '../../components/Button';
import Atom from '../static/atom.svg';

storiesOf('2. Buttons', module)
  .add('Button', () => (
    <Heading image={Atom} title="Button">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Button />} importModules="Button" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Button} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
