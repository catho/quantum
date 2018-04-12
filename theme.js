import { rgba } from 'polished';
import Colors from './components/Colors';

export default {
  sizes: {
    radius: '4px',
    fieldHeight: '40px',
    spacing: '20px',
    loading: '60px',
  },
  shadow: `0 2px 2px ${rgba(Colors.NEUTRAL.DARKERGRAY.BLACK, 0.1)}`,
  mixins: {
    transition: (property = 'all', timing = '0.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
  },
};
