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
  'Range',
  'Textarea',
  'Toggle',
  'Form',

  // 4. Notifications
  'Notification',

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

  // 10. Wizard
  'Wizard',

  // 11. Slider
  'Slider',

  // 12. Other
  'Loading',
  'Loader',

  // 13. Popover
  'Popover',
].map(s => `./${s}/${s}.story.jsx`);
