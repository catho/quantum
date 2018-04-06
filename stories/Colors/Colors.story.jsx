import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/decorators/Heading';

import Colors from './Colors';

storiesOf('1. Layout', module)
  .addDecorator(Heading)
  .add('Color Palette', () => <Colors />);
