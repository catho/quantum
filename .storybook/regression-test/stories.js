/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

export default [
  'Avatar',
  'Icon',
  'Accordion',
  'Alert',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'CircularLoader',
  'Dropdown',
  'Grid',
  'Hamburger',
  'Input',
  'Modal',
  'Pagination',
  'Popover',
  'ProgressBar',
  'RadioGroup',
  'RangeSlider',
  'Skeleton',
  'Socials',
  'TabbedView',
  'Tag',
  'TextArea',
  'Toggle',
  'Tooltip',
  'Stepper',
  'SegmentedControl',
].map(s => `./${s}/${s}.regression-test.story.jsx`);
