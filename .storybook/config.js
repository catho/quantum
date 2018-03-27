import { configure } from '@storybook/react';
import 'babel-polyfill';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.story.jsx?$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
