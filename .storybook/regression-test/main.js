const path = require('path');

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
  async webpackFinal(config) {
    const customConfigs = { ...config };
    customConfigs.module.rules = customConfigs.module.rules.filter(
      (rule) => rule.test && !rule.test.toString().includes('css'),
    );

    customConfigs.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     implementation: require('postcss'),
        //   }
        // },
      ],
      include: path.resolve(__dirname, '../../components'),
    });

    return customConfigs;
  },
};

export default config;
