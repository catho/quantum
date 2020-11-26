import React from 'react';
import 'babel-polyfill';
import 'loki/configure-react';
import { configure, addDecorator } from '@storybook/react';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../components/GlobalStyle';
import stories from './stories';

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
