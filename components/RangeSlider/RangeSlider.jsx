import { createRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MaterialSlider from '@mui/material/Slider';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import withStyles from '@mui/styles/withStyles';
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
    spacing: { xxsmall, xsmall, small, large },
    baseFontSize,
  } = theme;

  const arrowSize = xsmall - 1;

  const halfMeasure = '50%';

  const stylerStyles = {
    '&.MuiSlider-root': {
      height: xsmall,
    },
    '& .MuiSlider-thumb': {
      backgroundColor: disabled ? neutral[500] : primary[700],
      border: 'none',
      height: large,
      width: large,
      marginTop: 0,
      '&:focus,&:hover': {
        '& > *': {
          transform: `scale(1) translateX(-${halfMeasure}) !important`,
        },
      },
      '&::before': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      width: 'auto',
      top: '-50px',
      left: halfMeasure,
      padding: 0,
      backgroundColor: disabled ? neutral[500] : primary[700],
      transform:
        valueLabelDisplay === 'on'
          ? `scale(1) translateX(-${halfMeasure}) !important`
          : 'scale(0)',
      '&:focus,&:hover': {
        transform: `scale(1) translateX(-${halfMeasure})`,
      },
      '&::before': {
        display: `none`,
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
        fontSize: baseFontSize,
        padding: `${xsmall}px ${small}px`,
        borderRadius: `${xxsmall}px`,
        height: large,
        transform: 'none',
        width: 'auto',
        whiteSpace: 'nowrap',

        '& > *': {
          width: 'auto',
          transform: 'none',
        },
      },
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      marginTop: `${xxsmall}px`,
    },
    '& .MuiSlider-track': {
      height: 8,
      borderRadius: `${xxsmall}px`,
      border: 'none',
      backgroundColor: hexToRgba(primary[700], 0.5),
    },
    '& .MuiSlider-rail': {
      height: 8,
      borderRadius: `${xxsmall}px`,
      color: disabled ? neutral[500] : primary[700],
    },
  };

  const formatedValue =
    typeof value === 'object' ? [value.from, value.to] : value;
  const formatedDefaultValue =
    typeof defaultValue === 'object'
      ? [defaultValue.from, defaultValue.to]
      : defaultValue;

  return (
    <SliderWrapper theme={theme}>
      <MaterialSlider
        sx={stylerStyles}
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
        ref={createRef()}
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
/* istanbul ignore next */
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
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

export default RangeSlider;
