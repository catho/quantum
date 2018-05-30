import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SliderComponent from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';

const StyledSlider = styled(SliderComponent)`
  &.rc-slider {
    height: 50px;
  }

  &.rc-slider-disabled {
    .rc-slider-handle {
      background-color: ${Colors.GREY[500]};
    }
    background-color: ${Colors.WHITE};
  }

  .rc-slider-handle {
    border: none;
    box-shadow: 0 0 5px ${Colors.GREY['600']}4D;
    margin-left: -10px;
    width: ${props => (!props.disabled ? '20px' : '15px')};
    height: ${props => (!props.disabled ? '20px' : '15px')};
    transition: border 0.1s, box-shadow 0.1s;

    ${props => !props.disabled &&
      `&:hover {
        box-shadow: 0 0 1px 5px ${Colors.SECONDARY['500']}80;
      }

      &:active {
        border: 1px solid ${Colors.SECONDARY['500']};
        box-shadow: none;
      }
      `
}
}

  .rc-slider-rail,
  .rc-slider-track {
    height: 8px;
  }
  
  .rc-slider-track {
    background-color: ${Colors.SECONDARY['500']};
  }

  .rc-slider-mark {
    top: 26px;
  }

  .rc-slider-dot {
    display: none;
  }
}
`;

const { Handle: OriginalHandle } = SliderComponent;

const Handle = ({
  value,
  offset,
  dragging,
  ...restProps
}) => (
  <Tooltip slider offset={offset} text={value.toString()}>
    <OriginalHandle value={value} offset={offset} {...restProps} />
  </Tooltip>
);

Handle.defaultProps = {
  value: 0,
  offset: 0,
  dragging: false,
};

Handle.propTypes = {
  value: PropTypes.number,
  offset: PropTypes.number,
  dragging: PropTypes.bool,
};

/** Sliders allow users to make selections from a range of values. */

const Slider = ({
  tooltip,
  marks,
  min,
  max,
  step,
}) => {
  const sliderProps = {
    min,
    max,
    step,
  };

  if (tooltip) {
    sliderProps.handle = Handle;
  }

  if (marks) {
    sliderProps.marks = marks;
  }

  return (
    <StyledSlider
      {...sliderProps}
    />
  );
};

Slider.defaultProps = {
  tooltip: false,
  marks: {},
  step: 1,
  onChange: () => {},
  onBeforeChange: () => {},
  onAfterChange: () => {},
  onClick: () => {},
};

Slider.propTypes = {
  /** Shows the value while dragging a tooltip above the slider */
  tooltip: PropTypes.bool,
  /** Dots on specified values to snap the drag on Slider */
  marks: PropTypes.shape,
  /** Minimum value allowed */
  min: PropTypes.number.isRequired,
  /** Maximum value allowed */
  max: PropTypes.number.isRequired,
  /** Value on how much increment the value on drag event */
  step: PropTypes.number,
  /** Triggers a function on OnChange event */
  onChange: PropTypes.func,
  /** Triggers a function before OnChange event */
  onBeforeChange: PropTypes.func,
  /** Triggers a function after OnChange event */
  onAfterChange: PropTypes.func,
  /** Triggers a function on Onclick event */
  onClick: PropTypes.func,
};

export default Slider;
