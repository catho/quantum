import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Popover from '../../components/Popover';
import Button from '../../components/Button';

storiesOf('11. Popover', module).add('Popover', () => (
  <AutoExample
    component={Popover}
    componentProps={{
      content: 'Content',
      title: 'Title',
      closeTitle: 'Close',
      children: <Button>Show</Button>,
    }}
  />
));
