import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Colors from './Colors';

storiesOf('1. Layout', module)
  .addDecorator(HowToImport)
  .add('Color Palette', () => <Colors />);
