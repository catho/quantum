/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

export default [
  'Alert',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'Dropdown',
  'Input',
  'RadioGroup',
  'Toggle',
  'Slider',
  'TextArea',
  'Tag',
  'Pagination',
  'Grid',
  'ProgressBar',
  'CircularLoader',
].map(s => `./${s}/${s}.regression-test.story.jsx`);
