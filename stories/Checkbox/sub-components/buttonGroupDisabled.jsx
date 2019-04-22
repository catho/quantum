import React from 'react';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

const options = [
  {
    name: 'with-icon',
    label: 'With an Icon',
    icon: 'thumb_up',
    disabled: true,
  },
  { name: 'default-option', label: 'Default', disabled: true },
  { name: 'checked-option', label: 'Checked', disabled: true, checked: true },
];

export default {
  code: `const options = ${JSON.stringify(options, null, 2)};

<CheckboxGroup options={options} type="button" />`,
  component: <CheckboxGroup options={options} type="button" />,
};
