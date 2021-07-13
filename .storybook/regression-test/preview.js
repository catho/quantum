import React from 'react';
import 'loki/configure-react';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <GlobalStyle />
  </>
);

export const decorators = [UiStyle, CSSDecorator];
