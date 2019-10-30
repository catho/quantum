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
  'Hamburger',
  'Input',
  'RadioGroup',
  'Toggle',
  'Slider',
  'TextArea',
  'Tag',
  'Pagination',
  'Grid',
  'Skeleton',
  'ProgressBar',
  'CircularLoader',
  'TabbedView',
  'Tooltip',
  'Modal',
].map(s => `./${s}/${s}.regression-test.story.jsx`);
