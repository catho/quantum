import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Heading from '../../.storybook/decorators/Heading';

import Colors from './Colors';

storiesOf('1. Layout', module)
  .addDecorator(HowToImport)
  .addDecorator(Heading)
  .add('Color Palette', () => <Colors />);
