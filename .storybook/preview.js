import Typography from '../components/Typography';
import '../components/theme.css';
import '../components/_utilities.css';
import '../components/global.css';

const CSSDecorator = (Story, context) => (
  <>
    <Story {...context} />
    <Typography />
  </>
);

const decorators = [CSSDecorator];

export default { decorators };
