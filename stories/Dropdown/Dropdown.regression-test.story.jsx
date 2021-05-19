import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Simple,
  AutoComplete,
  RequiredMark,
  WithError,
  Disabled,
  WithImages,
} from './examples';

storiesOf('Dropdown', module)
  .add('default', () => <Simple />)
  .add('autocomplete', () => <AutoComplete />)
  .add('required', () => <RequiredMark />)
  .add('error', () => <WithError />)
  .add('disabled', () => <Disabled />)
  .add('with images', () => <WithImages />);
