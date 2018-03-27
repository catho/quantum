import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { setOptions } from '@storybook/addon-options';
import Colors from '../../docs/colors.md';
import ColorsExample from './Example';
import Frame from '../Frame';

storiesOf('1. Layout', module)
  .add('Color palette', withReadme(Colors, () => (
    <Frame>
      { setOptions({ addonPanelInRight: true, showAddonPanel: false }) }
      <ColorsExample />
    </Frame>)));
