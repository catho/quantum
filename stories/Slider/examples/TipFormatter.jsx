import React from 'react';
import Slider from '../../../components/Slider';

const TipFormatter = () => <Slider tipFormatter={value => `R$ ${value}`} />;

TipFormatter.code = '<Slider tipFormatter={value => `R$ ${value}`} />'; // eslint-disable-line

export default TipFormatter;
