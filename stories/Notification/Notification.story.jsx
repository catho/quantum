import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Notification from '../../components/Notification';

storiesOf('4. Notifications', module)
  .add('Basic', () => (
    <AutoExample component={Notification} />
  ));
