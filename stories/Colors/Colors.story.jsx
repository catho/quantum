import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/HowToImport';
import ColorsExample from './Example';

storiesOf('1. Layout', module)
  .addDecorator(HowToImport)
  .add('Color Palette', () => <ColorsExample />);
