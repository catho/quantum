import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  { value: 'Tomato sauce', label: 'Tomato sauce' },
  { value: 'Mustard', label: 'Mustard' },
  { value: 'Barbecue sauce', label: 'Barbecue sauce' },
];

const simpleRadioGroup = {
  code: `const options = ${JSON.stringify(options, null, 2)};

<RadioGroup
  name="groceries"
  options={options}
/>

/* or */

<RadioGroup name="groceries">
  <RadioGroup.Radio value="Tomato sauce">
    Tomato sauce
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Mustard">
    Mustard
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Barbecue sauce">
    Barbecue sauce
  </RadioGroup.Radio>
</RadioGroup>`,
  component: <RadioGroup name="groceries" options={options} />,
};

export default simpleRadioGroup;
