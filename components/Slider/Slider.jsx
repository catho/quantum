import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SliderComponent from 'rc-slider';
import Colors from '../Colors';
import Tooltip from '../Tooltip';
import theme from '../../theme';
import 'rc-slider/assets/index.css';

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
    width: ${props => !props.disabled ? '20px' : '15px'};
    height: ${props => !props.disabled ? '20px' : '15px'};
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

const Handle = SliderComponent.Handle;

const handle = ({ value, dragging, index, offset, ...restProps }) => (
  <Tooltip slider offset={offset} text={value.toString()}>
    <Handle value={value} offset={offset} {...restProps} />
  </Tooltip>
);

const Slider = ({tooltip, marks, min, max, step}) => {
  const sliderProps = {
    min: min,
    max: max,
    step: step,
  }

  if(tooltip) {
    sliderProps.handle = handle;
  }

  if(marks) {
    sliderProps.marks = marks;
  }

  return (
    <StyledSlider
    {...sliderProps}
    />
  )
}

Slider.defaultProps = {
  tooltip: false,
};

Slider.propTypes = {
  tooltip: PropTypes.bool,
  marks: PropTypes.object,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: () => {},
  onBeforeChange: () => {},
  onAfterChange: () => {},
  onClick: () => {},
};

export default Slider;
