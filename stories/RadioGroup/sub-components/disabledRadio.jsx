import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const disabledOptions = [
  { value: 'Tomato sauce', label: 'Tomato sauce' },
  { value: 'Mustard', label: 'Mustard', disabled: true },
  { value: 'Barbecue sauce', label: 'Barbecue sauce' },
];

const disabledRadio = {
  code: `const options = ${JSON.stringify(disabledOptions, null, 2)};

<RadioGroup 
  name="groceries" 
  options={options} 
/>

/* or */

<RadioGroup name="groceries">
  <RadioGroup.Radio value="Tomato sauce">
    Tomato sauce
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Mustard" disabled>
    Mustard
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Barbecue sauce">
    Barbecue sauce
  </RadioGroup.Radio>
</RadioGroup>`,
  component: <RadioGroup name="groceries_disabled" options={disabledOptions} />,
};

export default disabledRadio;
