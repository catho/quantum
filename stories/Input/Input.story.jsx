
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Input from '../../components/Input';
import Atom from '../static/atom.svg';

storiesOf('3. Forms', module)
  .add('Input', () => (
    <Heading image={Atom} title="Input">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Input />} importModules="Input" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Input} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
