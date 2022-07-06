const stories = require('./stories');
module.exports = {
  stories,
  staticDirs: ['static'],
  addons: [
    '@storybook/addon-options/register',
    '@storybook/addon-links/register',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
};
