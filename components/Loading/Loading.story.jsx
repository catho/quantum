import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Loading from './Loading';

storiesOf('6. Loading', module)
  .addDecorator(HowToImport)
  .add('Loading', () => (
    <React.Fragment>
      <Loading />
    </React.Fragment>
  ));
