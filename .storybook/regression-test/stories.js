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
  'TextArea',
  'Tag',
  'Pagination',
  'Grid',
  'Skeleton',
  'ProgressBar',
  'CircularLoader',
  'RangeSlider',
  'TabbedView',
  'Tooltip',
  'Modal',
  'Popover',
].map(s => `./${s}/${s}.regression-test.story.jsx`);
