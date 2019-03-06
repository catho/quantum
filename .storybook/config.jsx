import React from 'react';
import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { GlobalStyle as UIGlobalStyle } from '@catho-private/quantum-storybook-ui';
import { CSSVariables } from '../components/GlobalStyle';
import stories from './stories';

addDecorator(
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
);

const CSSVariablesDecorator = storyFn => (
  <>
    <CSSVariables />
    {storyFn()}
  </>
);

addDecorator(UIGlobalStyle);
addDecorator(CSSVariablesDecorator);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  stories.forEach(filename => reqStories(filename));
}

configure(loadStories, module);
