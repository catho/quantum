import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircularLoader } from '../../components';

storiesOf('CircularLoader', module)
  .add('default', () => <CircularLoader />)
  .add('with secondary theme', () => <CircularLoader skin="secondary" />)
  .add('with custom size', () => <CircularLoader size="70px" />);
