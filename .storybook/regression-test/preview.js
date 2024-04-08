import 'loki/configure-react';
import GlobalStyle from '../../components/GlobalStyle';
import '../../components/theme.css';

const CSSDecorator = (Story, context) => (
  <div id="regression-test">
    <Story {...context} />
    <GlobalStyle />
  </div>
);

const decorators = [CSSDecorator];

export default { decorators };
