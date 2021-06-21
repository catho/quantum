import React from 'react';
import 'loki/configure-react';
import { withOptions } from '@storybook/addon-options';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../components/GlobalStyle';

const CSSDecorator = storyFn => <>{storyFn()}</>;
const FontDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [
  withOptions({
    name: 'Quantum',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/catho/quantum/',
  }),
  UiStyle,
  CSSDecorator,
  FontDecorator,
];
