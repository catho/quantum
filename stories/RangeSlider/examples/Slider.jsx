import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const BasicSlider = aditionalProps => (
  <RangeSlider defaultValue={50} valueLabelDisplay="on" />
);

BasicSlider.code = '<RangeSlider defaultValue={50} />';

export default BasicSlider;
