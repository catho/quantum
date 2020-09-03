import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../../components/Input';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('with label', () => <Input label="this is a label" />)
  .add('with default value', () => <Input value="a default value" />)
  .add('search', () => <Input type="search" />)
  .add('error', () => <Input error="message" />)
  .add('disabled', () => <Input disabled />)
  .add('disabled with text', () => <Input disabled value="some text" />)
  .add('helper', () => <Input helper="message" />);
