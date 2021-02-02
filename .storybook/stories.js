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
  'Breakpoints',

  // Alert
  'Alert',

  // Accordion
  'Accordion',

  // Avatar
  'Avatar',

  // Buttons
  'Button',

  // Forms
  'Checkbox',
  'Dropdown',
  'Input',
  'RadioGroup',
  'Toggle',
  'Form',
  'RangeSlider',
  'TextArea',

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

  // Hamburger
  'Hamburger',

  // Socials
  'Socials',

  'Step',
].map(s => `./${s}/${s}.story.jsx`);
