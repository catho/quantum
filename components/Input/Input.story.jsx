
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Input from './Input';

storiesOf('5. Input', module)
  .add('Input', () => (
    <Heading atom title="Input">
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
