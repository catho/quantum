import React from 'react';
import { storiesOf } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  showAddonPanel: true,
});

storiesOf(' Introduction', module)
  .add('Default', () => (
    <div>
      Hello Button
    </div>));
