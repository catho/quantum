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
        `box-shadow: 0 2px 5px ${Colors.SECONDARY['600']}4D`,
        `box-shadow: 0 2px 6px ${Colors.SECONDARY['600']}99`,
      ];

      return shadows[size] || shadows[1];
    },
    hexToRgba: (color, opacity) => {
      const R = parseInt(color.substring(1, 3), 16);
      const G = parseInt(color.substring(3, 5), 16);
      const B = parseInt(color.substring(5, 7), 16);

      return `rgba(${R}, ${G}, ${B}, ${opacity})`;
    },
  },
};
