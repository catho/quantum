const stories = require('./stories');
const config = {
  stories,
  staticDirs: ['static'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false,
        outline: false,
        viewport: false,
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

export default config;
