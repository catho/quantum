import 'loki/configure-react';
import GlobalStyle from '../../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <div id="regression-test">
    <Story {...context} />
    <GlobalStyle />
  </div>
);

export const decorators = [CSSDecorator];
