import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import Popover from '../../components/Popover';
import Tooltip from '../../components/Tooltip';

const description = `Popovers provide additional information upon hover or focus.
They often contain helper text that is contextual to an element.`;

storiesOf('Popover', module).add('Popover', () => (
  <AutoExample description={description} component={Popover} />
));
