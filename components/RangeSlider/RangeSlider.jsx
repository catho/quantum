import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import MaterialSlider from '@material-ui/core/Slider';
import { colors, spacing, baseFontSize } from '../shared/theme';
import { shadow, hexToRgba } from '../shared';
import Tooltip from '../Tooltip';
import valueValidator from './valueValidator';

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: null };
  }

  render() {}
}

RangeSlider.defaultProps = {
  max: 100,
  min: 0,
  value: 50,
  disabled: false,
  onChange: () => {},
  tipFormatter: value =>
    typeof value === 'object' ? `${value.from} to ${value.to}` : value,
  minMaxFormatter: value => value,
  theme: {
    spacing,
    colors,
    baseFontSize,
  },
};

RangeSlider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  /** RangeSlider will pass its value to tipFormatter, display its value in Tooltip, and hide Tooltip when return value is null. */
  tipFormatter: PropTypes.func,
  /** Same as tipFormatter, but for the min and max labels. */
  minMaxFormatter: PropTypes.func,
  /** It receives a Number to display a slider or an Object with from and to properties to display a range. Example: `value={10}` or `value={{ from: 20, to: 40 }}` */
  value: valueValidator,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

export default RangeSlider;
