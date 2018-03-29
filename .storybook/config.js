import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import Frame from './decorators/Frame';

setOptions({
  name: 'Catho Style-Guide',
  sortStoriesByKind: true,
  selectedAddonPanel: '@storybook/addon-knobs',
});

addDecorator(Frame);

const reqComponents = require.context('../stories', true, /.story.jsx?$/);
const reqStories = require.context('../components', true, /.story.jsx?$/);

function loadStories() {
  reqComponents.keys().forEach((filename) => reqComponents(filename));
  reqStories.keys().forEach((filename) => reqStories(filename));
}

configure(loadStories, module);
