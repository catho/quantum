import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import RcSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
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
  trackStyle: {
    height: 8,
  },
  railStyle: {
    height: 8,
  },
  marksStyle: {
    common: {
      fontSize: 16,
      marginLeft: 0,
      width: 'auto',
    },
    min: {
      left: 0,
    },
    max: {
      left: 'unset',
      right: 0,
    },
  },
};

const customStyle = css`
  .rc-slider-handle {
    background-color: ${Colors.BLUE[500]};
  }

  .rc-slider-rail {
    background-color: ${Colors.BLUE[200]};
  }

  .rc-slider-track {
    background-color: ${Colors.BLUE[50]};
  }

  .rc-slider-handle:active,
  .rc-slider-handle:focus {
    border: none;
    box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
  }

  &.rc-slider-disabled {
    background: none;

    .rc-slider-handle {
      background-color: ${Colors.BLACK[400]};
    }

    .rc-slider-rail {
      background-color: ${Colors.BLACK[100]};
    }

    .rc-slider-track {
      background-color: ${Colors.BLACK[200]};
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
    top: -41px;
    left: ${({ value, min, max }) => {
      let half = value;

      if (typeof value === 'object') {
        const { from, to } = value;
        half = (to + from) / 2;
      }

      return ((half - min) / (max - min)) * 100;
    }}%;
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

    const { value, tipFormatter, minMaxFormatter, min, max } = props;
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
};

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  /** Slider will pass its value to tipFormatter, display its value in Tooltip, and hide Tooltip when return value is null. */
  tipFormatter: PropTypes.func,
  minMaxFormatter: PropTypes.func,
  value: valueValidator,
};

export default Slider;
