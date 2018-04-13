import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('7. SmartComponents', module)
  .add('Header', () => <Header path="/" />);
