import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircularLoader } from '../../components';

storiesOf('CircularLoader', module)
  .add('neutral', () => <CircularLoader skin="neutral" />)
  .add('primary', () => <CircularLoader skin="primary" />)
  .add('success', () => <CircularLoader skin="success" />)
  .add('warning', () => <CircularLoader skin="warning" />)
  .add('error', () => <CircularLoader skin="error" />);
