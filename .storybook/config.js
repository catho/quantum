import 'babel-polyfill';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { Frame } from '@catho-private/quantum-storybook-ui';
import stories from './stories';

// import GlobalStyle from '../components/GlobalStyle';
// const Frame = storyFn => (
//   <React.Fragment>
//     <GlobalStyle />
//     {storyFn()}
//   </React.Fragment>
// );

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
