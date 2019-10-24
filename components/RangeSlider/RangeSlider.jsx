import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaterialSlider from '@material-ui/core/Slider';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import { hexToRgba } from '../shared';
import valueValidator from './valueValidator';

const SliderWrapper = styled.div`
  width: auto;
  ${({
    theme: {
      spacing: { large },
    },
  }) => `
      padding: 0 ${large / 2}px;
    `}
`;

const RangeSlider = props => {
  const {
    step,
    min,
    max,
    marks,
    onChange,
    value,
    defaultValue,
    disabled,
    tipFormatter,
    theme,
    track,
    'aria-labelledby': ariaLabelledby,
  } = props;

  const {
    colors: { neutral, primary },
    spacing: { xsmall, small, large },
    baseFontSize,
  } = theme;

  const arrowSize = xsmall - 1;

  const PrettoSlider = withStyles({
    root: {
      color: primary[600],
      height: 8,
    },
    thumb: {
      backgroundColor: primary[700],
      border: 'none',
      height: `${large}px !important`,
      width: `${large}px !important`,
      marginTop: `-${xsmall}px !important`,
      marginLeft: `-${large / 2}px !important`,
      '&:focus,&:hover,&$active': {
        '& > *': {
          transform: 'scale(1) translateX(-50%) !important',
        },
      },
    },
    valueLabel: {
      top: '-50px',
      left: '50%',
      transform: 'scale(0) translateX(-50%) !important',
      '&:focus,&:hover,&$active': {
        transform: 'scale(1) translateX(-50%) !important',
      },
      '&::after': {
        borderLeft: `${arrowSize}px solid transparent`,
        borderRight: `${arrowSize}px solid transparent`,
        borderTop: `${arrowSize}px solid ${neutral[700]}`,
        bottom: `-${arrowSize}px`,
        content: `" "`,
        height: 0,
        left: '50%',
        position: 'absolute',
        transform: 'translateX(-50%) !important',
        width: 0,
      },
      '& > *': {
        background: neutral[700],
        color: neutral[0],
        fontSize: `${baseFontSize}px`,
        padding: `${xsmall}px ${small}px`,
        borderRadius: '4px',
        height: `${large}px`,
        transform: 'none',

        '& > *': {
          transform: 'none',
        },
      },
    },
    mark: {
      display: 'none',
    },
    markLabel: {
      marginTop: `${xsmall}px`,
    },
    track: {
      height: 8,
      borderRadius: 4,
      backgroundColor: hexToRgba(primary[700], 0.5),
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(MaterialSlider);

  return (
    <SliderWrapper theme={theme}>
      <PrettoSlider
        getAriaLabel={tipFormatter}
        getAriaValueText={tipFormatter}
        valueLabelFormat={tipFormatter}
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        aria-valuetext={tipFormatter}
        step={step}
        min={min}
        max={max}
        marks={marks}
        onChange={onChange}
        value={value}
        disabled={disabled}
        track={track}
        aria-labelledby={ariaLabelledby}
      />
    </SliderWrapper>
  );
};

RangeSlider.defaultProps = {
  step: 1,
  max: 100,
  min: 0,
  value: undefined,
  defaultValue: 30,
  marks: undefined,
  disabled: false,
  onChange: () => {},
  tipFormatter: value =>
    typeof value === 'object' ? `${value.from} to ${value.to}` : value,
  track: 'normal',
  'aria-labelledby': undefined,
  theme: {
    spacing,
    colors,
    baseFontSize: defaultBaseFontSize,
  },
};

RangeSlider.propTypes = {
  step: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ),
  /** The track presentation:- normal the track will render a bar representing the slider value. - inverted the track will render a bar representing the remaining slider value. - false the track will render without a bar. */
  track: PropTypes.oneOf(['normal', false, 'inverted']),
  'aria-labelledby': PropTypes.string,
  /** RangeSlider will pass its value to tipFormatter, display its value in Tooltip */
  tipFormatter: PropTypes.func,
  /** It receives a Number to display a slider or an Object with from and to properties to display a range. Example: `value={10}` or `value={{ from: 20, to: 40 }}` */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(valueValidator),
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(valueValidator),
  ]),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

export default RangeSlider;
