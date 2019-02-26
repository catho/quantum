import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';

const sliderStyle = {
  handleStyle: {
    borderWidth: 0,
    height: 20,
    width: 20,
    marginTop: -6,
    marginLeft: -9,
  },
  trackStyle: {
    height: 8,
  },
  railStyle: {
    height: 8,
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

const StyledSlider = styled(Slider)`
  ${customStyle}
`;
const StyledRange = styled(Slider.Range)`
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

class Range extends React.Component {
  constructor(props) {
    super(props);

    const { value: valueProp, max, min } = this.props;
    let value = valueProp;

    if (typeof valueProp !== 'object') {
      value = valueProp >= min && valueProp <= max ? valueProp : min;
    }

    this.state = { value };
  }

  handleChange = value => {
    if (Array.isArray(value)) {
      const [from, to] = value;
      this.setState({ value: { from, to } });
    } else {
      this.setState({ value });
    }
  };

  render() {
    const {
      handleChange,
      props,
      state: { value },
    } = this;
    const { handleStyle, trackStyle } = sliderStyle;

    const tooltipText =
      typeof value === 'object' ? `${value.from} a ${value.to}` : value;

    return (
      <StyledTooltip {...props} text={tooltipText} value={value}>
        {typeof value === 'object' ? (
          <StyledRange
            {...props}
            {...sliderStyle}
            allowCross={false}
            pushable
            onChange={handleChange}
            value={[value.from, value.to]}
            handleStyle={[handleStyle, handleStyle]}
            trackStyle={[trackStyle, trackStyle]}
          />
        ) : (
          <StyledSlider
            {...props}
            {...sliderStyle}
            onChange={handleChange}
            value={value}
          />
        )}
      </StyledTooltip>
    );
  }
}

Range.defaultProps = {
  max: 100,
  min: 0,
  value: 50,
};

Range.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
  ]),
};

export default Range;
