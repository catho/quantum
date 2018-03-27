import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import 'babel-polyfill';

setOptions({
  name: 'Catho Style-Guide',
  sortStoriesByKind: true,
  addonPanelInRight: false,
  selectedAddonPanel: '@storybook/addon-knobs'
});

const reqComponents = require.context('../stories', true, /.story.jsx?$/);
const reqStories = require.context('../components', true, /.story.jsx?$/);

function loadStories() {
  reqComponents.keys().forEach((filename) => reqComponents(filename));
  reqStories.keys().forEach((filename) => reqStories(filename));
}

configure(loadStories, module);
