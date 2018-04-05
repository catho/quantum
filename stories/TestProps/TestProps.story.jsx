import React from 'react';
import { storiesOf } from '@storybook/react';
import ComponentPanel from '../../.storybook/decorators/ComponentPanel';
import Props from '../../.storybook/decorators/Props';
import TestProps from '../../components/TestProps';

import { TabbedView, Tab } from '../../.storybook/components/TabbedView';

storiesOf('3. TestProps', module)
  .add('Testing dynamic props', () => (
    <TabbedView componentName="TestProps">
      <Tab title="Usage">
        <ComponentPanel component={TestProps} />
      </Tab>
      <Tab title="API">
        <Props component={TestProps} />
      </Tab>
    </TabbedView>
  ));
