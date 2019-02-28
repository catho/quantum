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

  // 3. Forms
  'AutoComplete',
  'Checkbox',
  'Dropdown',
  'Input',
  'Radio',
  'RadioGroup',
  'Textarea',
  'Toggle',
  'Form',

  // 4. Alerts
  'Alert',

  // 5. Modals
  'Modal',

  // 6. Images
  'Image',
  'Logo',

  // 7. Mask
  'TextMask',

  // 8. Tooltip
  'Tooltip',

  // 9. Card
  'Card',

  // 10. List
  'List',

  // 11. Wizard
  'Wizard',

  // 12. Slider
  'Slider',

  // 13. Other
  'Loading',
  'Loader',

  // 14. Popover
  'Popover',

  // 15. Badge
  'Badge',

  // 16. Tags
  'Tag',
].map(s => `./${s}/${s}.story.jsx`);
