import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const Range = aditionalProps => (
  <RangeSlider defaultValue={{ from: 20, to: 80 }} {...aditionalProps} />
);

Range.code = '<RangeSlider defaultValue={{ from: 20, to: 80 }} />';

export default Range;
