import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import Tooltip from '../../components/Tooltip';

const description = `Tooltips provide additional information upon hover or focus.
They often contain helper text that is contextual to an element.`;

storiesOf('Tooltip', module).add('Basic', () => (
  <AutoExample
    description={description}
    component={Tooltip}
    componentProps={{
      children: 'Hover me',
      text: 'This is a hint.',
    }}
  />
));
