import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const childrenRadio = {
  code: `
  <RadioGroup name="groceries" >
  <RadioGroup.Radio value="Tomato sauce">
    <span>Tomato Sauce</span><small> Good!</small>
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Mustard">
    <span>Mustard</span><small> Medium!</small>
  </RadioGroup.Radio>
  <RadioGroup.Radio value="Barbecue sauce">
    <span>Barbecue sauce</span><small> really good!</small>
  </RadioGroup.Radio>
</RadioGroup>`,

  component: (
    <RadioGroup name="groceries">
      <RadioGroup.Radio value="Tomato sauce">
        <span>Tomato Sauce</span>
        <small> Good!</small>
      </RadioGroup.Radio>
      <RadioGroup.Radio value="Mustard">
        <span>Mustard</span>
        <small> Medium!</small>
      </RadioGroup.Radio>
      <RadioGroup.Radio value="Barbecue sauce">
        <span>Barbecue sauce</span>
        <small> really good!</small>
      </RadioGroup.Radio>
    </RadioGroup>
  ),
};

export default childrenRadio;
