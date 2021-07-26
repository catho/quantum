import React from 'react';
import 'loki/configure-react';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <div id="regression-test">
    <Story {...context} />
    <GlobalStyle />
  </div>
);

export const decorators = [UiStyle, CSSDecorator];
