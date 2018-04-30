import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import Frame from './decorators/Frame'

setOptions({
  name: 'Catho Style-Guide',
  sortStoriesByKind: true,
  showAddonPanel: false,
  addonPanelInRight: false,
  sidebarAnimations: false,
});

addDecorator(Frame);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  reqStories.keys().forEach((filename) => reqStories(filename));
}

configure(loadStories, module);
