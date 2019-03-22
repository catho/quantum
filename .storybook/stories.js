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

  'Alert',
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

  // 8. Tooltip
  'Tooltip',

  // 15. Badge
  'Badge',

  // 16. Tags
  'Tag',

  'Card',
].map(s => `./${s}/${s}.story.jsx`);
