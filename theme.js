import Colors from './components/Colors';

const hexToRgba = (color, opacity) => {
  const R = parseInt(color.substring(1, 3), 16);
  const G = parseInt(color.substring(3, 5), 16);
  const B = parseInt(color.substring(5, 7), 16);

  return `rgba(${R}, ${G}, ${B}, ${opacity})`;
};

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
    hexToRgba,
    transition: (property = 'all', timing = '0.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
    shadow: (size = 1) => {
      const shadows = [
        'box-shadow: none;',
        `box-shadow: 0 2px 5px ${hexToRgba(Colors.SECONDARY['600'], 0.3)};`,
        `box-shadow: 0 2px 6px ${hexToRgba(Colors.SECONDARY['600'], 0.6)};`,
      ];

      return shadows[size] || shadows[1];
    },
  },
};
