import React from 'react';
import { storiesOf } from '@storybook/react';
import { CircularLoader } from '../../components';

storiesOf('CircularLoader', module)
  .add('default', () => <CircularLoader />)
  .add('with custom color', () => <CircularLoader color="#000000" />)
  .add('with custom size', () => <CircularLoader size="70px" />);
