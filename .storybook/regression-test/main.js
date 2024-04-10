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
            mode: (resourcePath) => {
              if (!/module.css$/i.test(resourcePath)) {
                return 'global';
              }

              return 'local';
            },
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
