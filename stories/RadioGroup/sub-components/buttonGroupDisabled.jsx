import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  {
    value: 'with-icon',
    label: 'With an Icon',
    icon: 'info',
    disabled: true,
  },
  { value: 'default-option', label: 'Default', disabled: true },
  { value: 'checked-option', label: 'Checked', disabled: true },
];

const buttonGroup = {
  code: `const options = ${JSON.stringify(options, null, 2)};

<RadioGroup
  name="groceries"
  type="button"
  options={options}
  checked="checked-option"
>
...
</RadioGroup>`,
  component: (
    <RadioGroup
      name="disabled-example"
      value="checked-option"
      options={options}
      type="button"
    />
  ),
};

export default buttonGroup;
