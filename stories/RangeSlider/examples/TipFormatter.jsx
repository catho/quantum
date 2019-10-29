import React from 'react';
import RangeSlider from '../../../components/RangeSlider';

const TipFormatter = () => (
  <RangeSlider tipFormatter={value => `R$ ${value}`} />
);

TipFormatter.code = '<RangeSlider tipFormatter={value => `R$ ${value}`} />'; // eslint-disable-line

export default TipFormatter;
