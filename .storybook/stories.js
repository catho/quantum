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
  'Icon',

  // Buttons
  'Button',

  // Forms
  'Checkbox',
  'Dropdown',
  'RadioGroup',
  'Toggle',
  'Form',
  'Slider',

  // Tooltip
  'Tooltip',

  // Badge
  'Badge',

  // Tags
  'Tag',

  // TabbedView
  'TabbedView',
].map(s => `./${s}/${s}.story.jsx`);
