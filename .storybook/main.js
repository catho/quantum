const stories = require('./stories');
module.exports = {
  stories,
  addons: [
    '@storybook/addon-options/register',
    '@storybook/addon-links/register',
  ],
  features: {
    buildStoriesJson: true,
  },
};
