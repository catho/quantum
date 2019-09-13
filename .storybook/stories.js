/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

export default [
  'Introduction',

  // Foundations
  'Colors',
  'Grid',
  'Typography',
  'Theme',
  'Icon',

  'Alert',

  // Buttons
  'Button',

  // Forms
  'Checkbox',
  'Dropdown',
  'Input',
  'RadioGroup',
  'Toggle',
  'Form',
  'Slider',
  'TextArea',

  // Skeletons
  'Skeleton',
  // Loaders
  'Loaders',

  // Tooltip
  'Tooltip',

  // Popover
  'Popover',

  // Badge
  'Badge',

  // Tags
  'Tag',

  // TabbedView
  'TabbedView',

  // Card
  'Card',

  // Modal
  'Modal',

  // Pagination
  'Pagination',

  // SnackBar
  'SnackBar',
].map(s => `./${s}/${s}.story.jsx`);
