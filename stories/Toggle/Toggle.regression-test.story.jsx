import React from 'react';

import Toggle from '../../components/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
};

export const Default = () => <Toggle />;

Default.story = {
  name: 'default',
};

export const Checked = () => <Toggle checked />;

Checked.story = {
  name: 'checked',
};
