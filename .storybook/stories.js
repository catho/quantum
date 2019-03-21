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
  'Input',
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

  // Card
  'Card',
].map(s => `./${s}/${s}.story.jsx`);
