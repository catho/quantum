import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const BasicSlider = aditionalProps => (
  <RangeSlider defaultValue={50} {...aditionalProps} />
);

BasicSlider.code = '<RangeSlider defaultValue={50} />';
BasicSlider.codeWithMarks = '<RangeSlider marks={marks} defaultValue={50} />';

export default BasicSlider;
