import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Tooltip from '../Tooltip';
import valueValidator from './valueValidator';

const sliderStyle = {
  handleStyle: {
    borderWidth: 0,
    height: 20,
    marginLeft: -9,
    marginTop: -6,
    width: 20,
  },
  marksStyle: {
    common: {
      fontSize: baseFontSize,
      marginLeft: 0,
      width: 'auto',
    },
    max: {
      left: 'unset',
      right: 0,
    },
    min: { left: 0 },
  },
  railStyle: { height: 8 },
  trackStyle: { height: 8 },
};

const tipPosition = ({ value, min, max }) => {
  let half = value;

  if (typeof value === 'object') {
    const { from, to } = value;
    half = (to + from) / 2;
  }

  return ((half - min) / (max - min)) * 100;
};

const customStyle = css`
  .rc-slider-handle {
    background-color: ${({
      theme: {
        colors: {
          primary: { 500: primary500 },
        },
      },
    }) => primary500};
  }

  .rc-slider-rail {
    background-color: ${({
      theme: {
        colors: {
          primary: { 100: primary100 },
        },
      },
    }) => primary100};
  }

  .rc-slider-track {
    background-color: ${Colors.BLUE[50]}; //usar o hex
  }

  .rc-slider-handle:active,
  .rc-slider-handle:focus {
    border: none;
    box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
  }

  &.rc-slider-disabled {
    background: none;

    .rc-slider-handle {
      background-color: ${({
        theme: {
          colors: {
            neutral: { 500: neutral500 },
          },
        },
      }) => neutral500};
    }

    .rc-slider-rail {
      background-color: ${({
        theme: {
          colors: {
            neutral: { 100: neutral100 },
          },
        },
      }) => neutral100};
    }

    .rc-slider-track {
      background-color: ${({
        theme: {
          colors: {
            neutral: { 300: neutral300 },
          },
        },
      }) => neutral300};
    }
  }
`;

const StyledSlider = styled(RcSlider)`
  ${customStyle}
`;
const StyledRange = styled(RcSlider.Range)`
  ${customStyle}
`;

const StyledTooltip = styled(Tooltip)`
  width: 100%;

  > div:first-child {
    left: ${tipPosition}%;
    top: -41px;
  }
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: null };
  }

  handleChange = value => {
    const { onChange } = this.props;

    if (Array.isArray(value)) {
      const [from, to] = value;
      onChange({ from, to });
    } else {
      onChange(value);
    }
  };

  handleMouseDown = () => {
    this.setState({ visible: true });
  };

  handleMouseUp = () => {
    this.setState({ visible: false });
  };

  render() {
    const {
      handleChange,
      handleMouseDown,
      handleMouseUp,
      props,
      state: { visible },
    } = this;

    const { value, tipFormatter, minMaxFormatter, min, max, theme } = props;
    const { from, to } = value;
    const { handleStyle, trackStyle, marksStyle, railStyle } = sliderStyle;
    const marks = {
      [min]: {
        style: {
          ...marksStyle.common,
          ...marksStyle.min,
        },
        label: minMaxFormatter(min),
      },
      [max]: {
        style: {
          ...marksStyle.common,
          ...marksStyle.max,
        },
        label: minMaxFormatter(max),
      },
    };

    return (
      <StyledTooltip
        {...props}
        text={String(tipFormatter(value))}
        value={value}
        visible={visible}
      >
        {typeof value === 'object' ? (
          <StyledRange
            {...props}
            allowCross={false}
            dotStyle={{ display: 'none' }}
            handleStyle={[handleStyle, handleStyle]}
            max={max}
            min={min}
            theme={theme}
            marks={marks}
            pushable
            onChange={handleChange}
            onBeforeChange={handleMouseDown}
            onAfterChange={handleMouseUp}
            railStyle={railStyle}
            trackStyle={[trackStyle, trackStyle]}
            value={[from, to]}
          />
        ) : (
          <StyledSlider
            {...props}
            dotStyle={{ display: 'none' }}
            handleStyle={handleStyle}
            max={max}
            marks={marks}
            min={min}
            theme={theme}
            onChange={handleChange}
            onBeforeChange={handleMouseDown}
            onAfterChange={handleMouseUp}
            railStyle={railStyle}
            trackStyle={trackStyle}
            value={value}
          />
        )}
      </StyledTooltip>
    );
  }
}

StyledRange.displayName = 'RcRange';
StyledSlider.displayName = 'RcSlider';

Slider.defaultProps = {
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

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  /** Slider will pass its value to tipFormatter, display its value in Tooltip, and hide Tooltip when return value is null. */
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

export default Slider;
