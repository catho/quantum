/**
 * Storybook list of stories
 *
 * order is reflected in storybook sidebar
 */

export default [
  'Introduction',

  // 1. Foundations
  'Colors',
  'Grid',
  'Typography',
  'Icon',

  // 2. Buttons
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

  // 8. Tooltip
  'Tooltip',

  // 15. Badge
  'Badge',

  // 16. Tags
  'Tag',

  // 17. Cards
  'Card',

  // 18. SnackBar
  'SnackBar',
].map(s => `./${s}/${s}.story.jsx`);
