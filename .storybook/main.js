const stories = require('./stories');

const isRuleForStyles = (rule) =>
  rule.test instanceof RegExp && rule.test.test('.css');

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
  webpackFinal: async (config) => {
    config.module.rules
      .find((rule) => typeof rule === 'object' && isRuleForStyles(rule))
      .use.push({
        loader: 'postcss-loader',
        options: {
          implementation: require.resolve('postcss'),
        },
      });
    return config;
  },
};

export default config;
