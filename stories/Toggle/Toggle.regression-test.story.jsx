import React from 'react';
import { storiesOf } from '@storybook/react';

import Toggle from '../../components/Toggle';

storiesOf('Toggle', module)
  .add('default', () => <Toggle />)
  .add('checked', () => <Toggle checked />);
