import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';
import Tooltip from '../../components/Tooltip';

storiesOf('8. Tooltip', module).add('Basic', () => (
  <AutoExample
    component={Tooltip}
    componentProps={{
      children: 'Hover me',
    }}
  />
));
