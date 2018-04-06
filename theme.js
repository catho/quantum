export default {
  sizes: {
    radius: '4px',
    fieldHeight: '40px',
    spacing: '20px',
  },
  mixins: {
    transition: (property = 'all', timing = '.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
  },
};
