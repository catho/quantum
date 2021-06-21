/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

module.exports = [
  'Avatar',
  'Icon',
  'Accordion',
  'Alert',
  'Badge',
  'Button',
  'Carousel',
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
].map(s => `../../stories/${s}/${s}.regression-test.story.jsx`);
