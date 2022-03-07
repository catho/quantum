import 'loki/configure-react';
import { withOptions } from '@storybook/addon-options';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <GlobalStyle />
  </>
);

export const parameters = {
  layout: 'fullscreen',
};

export const decorators = [
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
  UiStyle,
  CSSDecorator,
];
