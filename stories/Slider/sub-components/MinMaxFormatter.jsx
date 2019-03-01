import React, { Component } from 'react';
import Slider from '../../../components/Slider';

class MinMaxFormatter extends Component {
  render() {
    return <Slider minMaxFormatter={value => `R$ ${value}`} />;
  }
}

MinMaxFormatter.code = '<Slider minMaxFormatter={value => `R$ ${value}`} />';

export default MinMaxFormatter;
