import React from 'react';
import { storiesOf } from '@storybook/react';
import { SnackBar } from '../../components';

const actions = {
  title: 'HIDE',
  callbackFn: () => {},
};

storiesOf('SnackBar', module)
  .add('Simple', () => (
    <SnackBar text="SnackBar text content" actionTrigger={actions} />
  ))
  .add('Primary', () => (
    <SnackBar text="SnackBar text content" skin="primary" />
  ))
  .add('Success', () => (
    <SnackBar text="SnackBar text content" skin="success" />
  ))
  .add('Warning', () => (
    <SnackBar text="SnackBar text content" skin="warning" />
  ))
  .add('Error', () => <SnackBar text="SnackBar text content" skin="error" />);
