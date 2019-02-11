import 'babel-polyfill';
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { Frame } from '@catho-private/quantum-storybook-ui';
import GlobalStyle from '../components/GlobalStyle';
import stories from './stories';

const QuantumTypography = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
);

addDecorator(QuantumTypography);
addDecorator(Frame);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  stories.forEach(filename => reqStories(filename));
}

configure(loadStories, module);
