import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Modal from './Modal';

const stories = storiesOf('5. Modal', module);
stories
  .add('Modal', () => (
    <Heading atom title="Modal">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={<Modal />} importModules="Modal" />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={Modal} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
