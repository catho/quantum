import React from 'react';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

const options = [
  { name: 'with-icon', label: 'With an Icon', icon: 'thumb_up' },
  { name: 'default', label: 'Default' },
  { name: 'checked', label: 'Checked', checked: true },
];

export default {
  code: `<CheckboxGroup
  name="groceries"
  options={options}
  type="button"
  error="Example error message"
/>`,
  component: (
    <CheckboxGroup
      name="error-example"
      options={options}
      type="button"
      error="Example error message"
    />
  ),
};
