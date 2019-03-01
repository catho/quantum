import React, { Component } from 'react';
import Slider from '../../../components/Slider';

class TipFormatter extends Component {
  render() {
    return <Slider tipFormatter={value => `R$ ${value}`} />;
  }
}

TipFormatter.code = '<Slider tipFormatter={value => `R$ ${value}`} />';

export default TipFormatter;
