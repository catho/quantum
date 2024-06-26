import 'loki/configure-react';
import Typography from '../../components/Typography';
import '../../components/theme.css';
import '../../components/_utilities.css';
import '../../components/global.css';

const CSSDecorator = (Story, context) => (
  <div id="regression-test">
    <Story {...context} />
    <Typography />
  </div>
);

const decorators = [CSSDecorator];

export default { decorators };
