import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const BasicDisabledSlider = aditionalProps => (
  <RangeSlider disabled defaultValue={50} {...aditionalProps} />
);

BasicDisabledSlider.code = '<RangeSlider disabled defaultValue={50} />';

export default BasicDisabledSlider;
