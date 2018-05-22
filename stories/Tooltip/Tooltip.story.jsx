import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Example from '../../.storybook/components/Example';
import { Tab } from '../../.storybook/components/TabbedView';
import Tooltip from '../../components/Tooltip';

const tabExample = (
  <Tab title="Example">
    <h3>Skins</h3>
    <div>
      <Example component={<Tooltip skin="info">Info</Tooltip>} />
      <Example component={<Tooltip skin="danger">Danger</Tooltip>} />
      <Example component={<Tooltip skin="success">Success</Tooltip>} />
      <Example component={<Tooltip skin="warning">Warning</Tooltip>} />
    </div>

    <h3>Placement</h3>
    <div>
      <Example component={<Tooltip place="top">Top</Tooltip>} />
      <Example component={<Tooltip place="right">Right</Tooltip>} />
      <Example component={<Tooltip place="bottom">Bottom</Tooltip>} />
      <Example component={<Tooltip place="left">Left</Tooltip>} />
    </div>
  </Tab>
);

storiesOf('9. Tooltip', module)
  .add('Basic', () => (
    <AutoExample
      component={Tooltip}
      additionalTabs={tabExample}
    />
  ));
