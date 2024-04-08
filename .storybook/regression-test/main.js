const isRuleForStyles = (rule) =>
  rule.test instanceof RegExp && rule.test.test('.css');

const config = {
  stories: ['../../stories/**/*.regression-test.story.jsx'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        measure: false,
        outline: false,
        controls: false,
        docs: false,
        actions: false,
        toolbars: false,
      },
    },
    '@storybook/addon-a11y',
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
