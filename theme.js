export default {
  sizes: {
    radius: '4px',
    fieldHeight: '40px',
    spacing: '20px',
  },
  shadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  mixins: {
    transition: (property = 'all', timing = '.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
  },
};
