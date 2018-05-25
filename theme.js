import { rgba } from 'polished';
import Colors from './components/Colors';

export default {
  font: {
    weight: 500,
    normal: '12px',
    big: '16px',
  },
  sizes: {
    radius: '1px',
    fieldHeight: '40px',
    spacing: '20px',
    loading: '60px',
  },
  mixins: {
    transition: (property = 'all', timing = '0.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
    shadow: (size = 1) => {
      const shadows = [
        'box-shadow: none;',
        `box-shadow: 0 2px 5px ${rgba(Colors.GREY['600'], 0.3)}`,
        `box-shadow: 0 2px 6px ${rgba(Colors.GREY['600'], 0.6)}`,
      ];

      return shadows[size] || shadows[1];
    },
  },
};
