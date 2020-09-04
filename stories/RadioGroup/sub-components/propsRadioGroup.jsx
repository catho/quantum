import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  { value: 'Tomato sauce', label: 'Tomato sauce' },
  { value: 'Mustard', label: 'Mustard' },
  { value: 'Barbecue sauce', label: 'Barbecue sauce' },
];

const propsRadioGroup = {
  code: `<RadioGroup 
  name="groceries" 
  defaultValue="Barbecue sauce"> 
  ... 
</RadioGroup>

<RadioGroup 
  name="groceries" 
  error="Required"> 
  ...
</RadioGroup>

<RadioGroup 
  name="groceries" 
  onChange={console.log} 
  ... 
</RadioGroup>
`,
  component: (
    <>
      <RadioGroup
        name="groceries_selected"
        defaultValue="Barbecue sauce"
        options={options}
      />

      <RadioGroup name="groceries_error" error="Required" options={options} />

      <RadioGroup
        name="groceries_onChange"
        options={options}
        onChange={console.log} /* eslint-disable-line */
      />
    </>
  ),
};

export default propsRadioGroup;
