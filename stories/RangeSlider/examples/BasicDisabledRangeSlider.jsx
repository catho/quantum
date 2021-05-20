import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const BasicDisabledRangeSlider = aditionalProps => (
  <RangeSlider disabled defaultValue={50} {...aditionalProps} />
);

BasicDisabledRangeSlider.code = '<RangeSlider disabled defaultValue={50} />';

export default BasicDisabledRangeSlider;
