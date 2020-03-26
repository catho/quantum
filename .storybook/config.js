import React from 'react';
import 'babel-polyfill';
import 'loki/configure-react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../components/GlobalStyle';
import stories from './stories';

addDecorator(
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
);

const CSSDecorator = storyFn => <>{storyFn()}</>;
const FontDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(UiStyle);
addDecorator(CSSDecorator);
addDecorator(FontDecorator);

const reqStories = require.context('../stories', true, /.story.jsx?$/);

function loadStories() {
  stories.forEach(filename => reqStories(filename));
}

configure(loadStories, module);
