const stories = require('./stories');

const isRuleForStyles = (rule) =>
  rule.test instanceof RegExp &&
  (rule.test.test('.css') ||
    rule.test.test('.scss') ||
    rule.test.test('.less'));

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
    const rulesWithoutCssRuleDefault = config.module.rules.filter(
      (rule) => typeof rule === 'object' && !isRuleForStyles(rule),
    );

    const rulesWithPostCSSLoader = [...rulesWithoutCssRuleDefault];
    rulesWithPostCSSLoader.push({
      test: /\.((c|sa|sc)ss)$/i,
      use: [
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
      ],
    });

    return {
      ...config,
      module: { ...config.module, rules: [...rulesWithPostCSSLoader] },
    };
  },
};

export default config;
