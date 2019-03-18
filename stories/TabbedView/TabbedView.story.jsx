import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabbedView } from '../../components';

storiesOf('TabbedView', module).add('TabbedView', () => (
  <TabbedView>
    <TabbedView.Tab title="1">Tab 1</TabbedView.Tab>
    <TabbedView.Tab title="2">Tab 2</TabbedView.Tab>
  </TabbedView>
));
