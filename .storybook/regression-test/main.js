const isRuleForStyles = (rule) =>
  rule.test instanceof RegExp &&
  (rule.test.test('.css') ||
    rule.test.test('.scss') ||
    rule.test.test('.less'));

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
