import GlobalStyle from '../components/GlobalStyle';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <GlobalStyle />
  </>
);

const decorators = [CSSDecorator];

export default { decorators };
