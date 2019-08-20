import React from 'react';
import 'babel-polyfill';
import 'loki/configure-react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
// import { UiStyle } from '@catho/quantum-storybook-ui';
import { CSSVariables, IconFont } from '../../components/GlobalStyle';
import stories from './stories';

// addDecorator(
//   withOptions({
//     name: 'Quantum',
//     showAddonPanel: false,
//     addonPanelInRight: false,
//     url: 'https://github.com/catho/quantum/',
//   }),
// );

const CSSDecorator = storyFn => (
  <>
    <CSSVariables />
    <IconFont />
    {storyFn()}
  </>
);

// addDecorator(UiStyle);
addDecorator(CSSDecorator);

const reqStories = require.context(
  '../../stories',
  true,
  /.regression-test.story.jsx?$/,
);

function loadStories() {
  stories.forEach(filename => reqStories(filename));
}

configure(loadStories, module);
