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
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled,
    marks,
    max,
    min,
    onChange,
    onChangeCommitted,
    step,
    theme,
    tipFormatter,
    track,
    value,
    valueLabelDisplay,
  } = props;

  const {
    colors: { neutral, primary },
    spacing: { xsmall, small, large },
    baseFontSize,
  } = theme;

  const arrowSize = xsmall - 1;

  const halfMeasure = '50%';

  const StyledSlider = withStyles({
    root: {
      color: primary[600],
      height: 8,
    },
    thumb: {
      backgroundColor: disabled ? neutral[500] : primary[700],
      border: 'none',
      height: `${large}px !important`,
      width: `${large}px !important`,
      marginTop: `-${xsmall}px !important`,
      marginLeft: `-${large / 2}px !important`,
      '&:focus,&:hover': {
        '& > *': {
          transform: `scale(1) translateX(-${halfMeasure}) !important`,
        },
      },
    },
    valueLabel: {
      width: 'auto',
      top: '-50px',
      left: halfMeasure,
      transform:
        valueLabelDisplay === 'on'
          ? `scale(1) translateX(-${halfMeasure}) !important`
          : 'scale(0)',
      '&:focus,&:hover': {
        transform: `scale(1) translateX(-${halfMeasure}) !important`,
      },
      '&::after': {
        borderLeft: `${arrowSize}px solid transparent`,
        borderRight: `${arrowSize}px solid transparent`,
        borderTop: `${arrowSize}px solid ${neutral[700]}`,
        bottom: `-${arrowSize}px`,
        content: `" "`,
        height: 0,
        left: halfMeasure,
        position: 'absolute',
        transform: `translateX(-${halfMeasure}) !important`,
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
        width: 'auto',
        whiteSpace: 'nowrap',

        '& > *': {
          width: 'auto',
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

  StyledSlider.displayName = 'SliderComponent';

  const formatedValue =
    typeof value === 'object' ? [value.from, value.to] : value;
  const formatedDefaultValue =
    typeof defaultValue === 'object'
      ? [defaultValue.from, defaultValue.to]
      : defaultValue;

  return (
    <SliderWrapper theme={theme}>
      <StyledSlider
        aria-labelledby={ariaLabelledby}
        defaultValue={disabled ? 0 : formatedDefaultValue}
        disabled={disabled}
        getAriaLabel={tipFormatter}
        getAriaValueText={tipFormatter}
        marks={marks}
        max={max}
        min={min}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        ref={React.createRef()}
        step={step}
        track={track}
        value={disabled ? 0 : formatedValue}
        valueLabelDisplay={disabled ? 'off' : valueLabelDisplay}
        valueLabelFormat={tipFormatter}
      />
    </SliderWrapper>
  );
};

SliderWrapper.displayName = 'RangeSliderWrapper';

RangeSlider.defaultProps = {
  step: 1,
  max: 100,
  min: 0,
  value: undefined,
  defaultValue: 30,
  marks: undefined,
  disabled: false,
  onChange: () => {},
  onChangeCommitted: () => {},
  tipFormatter: value => value.toString(),
  track: 'normal',
  'aria-labelledby': undefined,
  valueLabelDisplay: 'auto',
  theme: {
    spacing,
    colors,
    baseFontSize: defaultBaseFontSize,
  },
};

RangeSlider.propTypes = {
  /** The number that the slider will use as interval of each value */
  step: PropTypes.number,
  /** The max value possible in slider */
  max: PropTypes.number,
  /** The min value possible in slider */
  min: PropTypes.number,
  disabled: PropTypes.bool,
  /** Trigger a function on value change, evict to use controlled values, because the component will re-render before change the value */
  onChange: PropTypes.func,
  /** Trigger a function after value completely changes */
  onChangeCommitted: PropTypes.func,
  /** The min value possible in slider */
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ),
  /* *Set if the tooltip label is by default visible. 'auto' the value label will display when the thumb is hovered or focused. 'on' will display persistently. 'off' will never display. */
  valueLabelDisplay: PropTypes.oneOf(['auto', 'on', 'off']),
  /** The track presentation:- normal the track will render a bar representing the slider value. - inverted the track will render a bar representing the remaining slider value. - false the track will render without a bar. */
  track: PropTypes.oneOf(['normal', false, 'inverted']),
  'aria-labelledby': PropTypes.string,
  /** RangeSlider will pass its value to tipFormatter, display its value in Tooltip */
  tipFormatter: PropTypes.func,
  /** It receives a Number to display a slider or an Object with from and to properties to display a range. Example: `value={10}` or `value={{ from: 20, to: 40 }}` */
  value: valueValidator,
  defaultValue: valueValidator,
  theme: PropTypes.objectOf({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

export default RangeSlider;
