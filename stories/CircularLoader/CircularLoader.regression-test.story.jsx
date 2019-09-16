import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircularLoader } from '../../components';

storiesOf('CircularLoader', module)
  .add('default', () => <CircularLoader />)
  .add('with secondary theme', () => <CircularLoader skin="secondary" />)
  .add('with medium size', () => <CircularLoader size="medium" />)
  .add('with large size', () => <CircularLoader size="large" />)
  .add('with xlarge size', () => <CircularLoader size="xlarge" />)
  .add('with xxlarge size', () => <CircularLoader size="xxlarge" />)
  .add('with xxxlarge size', () => <CircularLoader size="xxxlarge" />);
