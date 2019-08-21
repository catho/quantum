import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../../components/Input';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('search', () => <Input type="search" />)
  .add('error', () => <Input error="message" />)
  .add('disabled', () => <Input disabled />)
  .add('helper', () => <Input helper="message" />);
