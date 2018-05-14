import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import Frame from './decorators/Frame';
import stories from './stories';

setOptions({
  name: 'Catho Style-Guide',
  sortStoriesByKind: true,
  showAddonPanel: false,
  addonPanelInRight: false,
  sidebarAnimations: false,
  url: 'http://gitlab.devel/frontend-platform/style-guide',
});

addDecorator(Frame);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  stories.forEach((filename) => reqStories(filename));
}

configure(loadStories, module);
