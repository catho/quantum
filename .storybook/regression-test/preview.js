import React from 'react';
import 'loki/configure-react';
import { addDecorator } from '@storybook/react';
import { UiStyle } from '@catho/quantum-storybook-ui';
import GlobalStyle from '../../components/GlobalStyle';

const CSSDecorator = storyFn => <>{storyFn()}</>;
const FontDecorator = storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export const decorators = [UiStyle, CSSDecorator, FontDecorator];
