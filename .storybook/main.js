const stories = require('./stories');

// const stories = [
//   '../stories/Introduction/*.story.@(mdx|jsx)',
//   '../stories/**/*.story.@(mdx|jsx)',
// ].filter(Boolean)

module.exports = {
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
    '@storybook/addon-a11y',
  ],
};
