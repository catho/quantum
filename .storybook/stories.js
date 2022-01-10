/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

module.exports = [
  'Introduction',

  // Foundations
  'Colors',
  'Grid',
  'Typography',
  'Theme',
  'Icon',
  'Breakpoints',
  'List',

  'Hooks',

  // Alert
  'Alert',

  // Accordion
  'Accordion',

  // Avatar
  'Avatar',

  'Carousel',

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

  // ChargeBar
  'ChargeBar',

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

  // Dialog
  'Dialog',

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

  'Stepper',

  'SegmentedControl',
].map(s => `../stories/${s}/${s}.story.jsx`);
