import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '../../components';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox />)
  .add('disabled', () => <Checkbox disabled />)
  .add('checked', () => <Checkbox checked />)
  .add('error', () => <Checkbox error="message" />)
  .add('label', () => <Checkbox label="example" />)
  .add('value', () => <Checkbox value="example" />);
