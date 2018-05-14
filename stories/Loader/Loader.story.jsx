
import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../../components/Loader';

storiesOf('6. Others', module)
  .add('Loader', () => (
    <React.Fragment>
      <Loader />
      <Loader.Text />
      <Loader.List />
      <Loader.IconList />
    </React.Fragment>
  ));
