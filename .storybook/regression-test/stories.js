/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

export default ['Alert', 'Badge', 'Button', 'Card', 'Checkbox'].map(
  s => `./${s}/${s}.regression-test.story.jsx`,
);
