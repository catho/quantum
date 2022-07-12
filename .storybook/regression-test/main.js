module.exports = {
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
};
