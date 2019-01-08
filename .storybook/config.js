import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import Frame from './decorators/Frame';
import stories from './stories';

addDecorator(
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
);

addDecorator(Frame);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  stories.forEach(filename => reqStories(filename));
}

configure(loadStories, module);
