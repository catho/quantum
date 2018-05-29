import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Popover from '../../components/Popover';

storiesOf('11. Popover', module).add('Popover', () => (
  <AutoExample component={Popover} />
));
