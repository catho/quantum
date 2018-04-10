import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Loading from './Loading';

storiesOf('5. Loading', module)
  .addDecorator(HowToImport)
  .add('', () => (
    <Loading />
  ));
