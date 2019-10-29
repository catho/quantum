import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const MinMax = () => <RangeSlider min={30} max={50} defaultValue={40} />;

MinMax.code = '<RangeSlider min={30} max={50} value={40} />';

export default MinMax;
