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
    const rulesIndex = config.module.rules.findIndex(
      (rule) => typeof rule === 'object' && isRuleForStyles(rule),
    );

    config.module.rules[rulesIndex].use = [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[local]___[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          implementation: require.resolve('postcss'),
        },
      },
    ];

    return config;
  },
};

export default config;
