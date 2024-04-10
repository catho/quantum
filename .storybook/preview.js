import GlobalStyle from '../components/GlobalStyle';
import '../components/theme.css';
import '../components/_utilities.css';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <GlobalStyle />
  </>
);

const decorators = [CSSDecorator];

export default { decorators };
