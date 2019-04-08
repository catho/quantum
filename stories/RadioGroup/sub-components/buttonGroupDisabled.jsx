import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  {
    value: 'with-icon',
    label: 'With an Icon',
    icon: 'thumb_up',
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
  checked="checked"
>
...
</RadioGroup>`,
  component: (
    <RadioGroup
      name="disabled-example"
      value="checked-option"
      onChange={({ value: opValue }) => this.setState({ value: opValue })}
      options={options}
      type="button"
    />
  ),
};

export default buttonGroup;
