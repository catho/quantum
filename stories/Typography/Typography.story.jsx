import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import Typography from './Example';
import Frame from '../Frame';

storiesOf('1. Layout', module)
  .add('Typography', () => (
    <Frame>
      { setOptions({ showAddonPanel: false }) }
      <Typography/>
    </Frame>
));
