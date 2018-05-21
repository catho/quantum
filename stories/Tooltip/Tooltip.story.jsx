import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Tooltip from '../../components/Tooltip';

storiesOf('9. Tooltip', module)
  .add('Basic', () => (
    <AutoExample component={Tooltip} />
  ));
