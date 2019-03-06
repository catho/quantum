import React from 'react';
import Slider from '../../../components/Slider';

const MinMaxFormatter = () => (
  <Slider minMaxFormatter={value => `R$ ${value}`} />
);

MinMaxFormatter.code = '<Slider minMaxFormatter={value => `R$ ${value}`} />'; // eslint-disable-line

export default MinMaxFormatter;
