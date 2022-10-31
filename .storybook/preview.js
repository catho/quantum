import 'loki/configure-react';

import GlobalStyle from '../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <GlobalStyle />
  </>
);

export const parameters = {
  layout: 'fullscreen',
  controls: { expand: true },
  options: { showPanel: true },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
};

export const decorators = [CSSDecorator];
