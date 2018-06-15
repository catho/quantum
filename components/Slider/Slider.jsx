import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SliderComponent from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';
import theme from '../../theme';

const StyledSlider = styled(SliderComponent)`
  &.rc-slider {
    height: 50px;
  }

  &.rc-slider-disabled {
    .rc-slider-handle {
      background-color: ${Colors.GREY[500]};
    }
    background-color: transparent;
  }

  .rc-slider-handle {
    border: none;
    box-shadow: 0 0 5px ${theme.mixins.hexToRgba(Colors.GREY['600'], 0.3)};
    margin-left: -10px;
    width: ${({ disabled }) => (!disabled ? '20px' : '15px')};
    height: ${({ disabled }) => (!disabled ? '20px' : '15px')};
    transition: border 0.1s, box-shadow 0.1s;

    ${({ disabled }) => !disabled &&
    `&:hover {
        box-shadow: 0 0 1px 5px ${theme.mixins.hexToRgba(Colors.SECONDARY['500'], 0.5)};
      }

      &:active {
        border: 1px solid ${Colors.SECONDARY['500']};
        box-shadow: none;
      }
      `
  }
}

  .rc-slider-mark {
    width: 100%;
    height: 18px;
    overflow: hidden;

    .rc-slider-mark-text:first-child {
      left: 1% !important;
    }
    .rc-slider-mark-text:last-child {
      left: 99% !important;
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
    <Tooltip slider offset={offset.toString()} text={value.toString()}>
      <OriginalHandle value={value} offset={offset} {...restProps} />
    </Tooltip>
  );

Handle.defaultProps = {
  value: 0,
  offset: '',
  dragging: false,
};

Handle.propTypes = {
  value: PropTypes.number,
  offset: PropTypes.string,
  dragging: PropTypes.bool,
};

/** Sliders allow users to make selections from a range of values. */
const Slider = ({
  tooltip,
  marks,
  min,
  max,
  step,
  disabled,
  ...rest
}) => {
  const sliderProps = {
    min,
    max,
    step,
    disabled,
    ...rest,
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
  step: 1,
  disabled: false,
  tooltip: false,
  marks: {},
  onChange: () => { },
  onBeforeChange: () => { },
  onAfterChange: () => { },
  onClick: () => { },
};

Slider.propTypes = {
  /** Minimum value allowed */
  min: PropTypes.number.isRequired,
  /** Maximum value allowed */
  max: PropTypes.number.isRequired,
  /** Value on how much increment the value on drag event */
  step: PropTypes.number,
  /** Disable slider */
  disabled: PropTypes.bool,
  /** Shows the value while dragging on a tooltip above the slider */
  tooltip: PropTypes.bool,
  /** Dots on specified values to snap the drag on Slider */
  // eslint-disable-next-line react/forbid-prop-types
  marks: PropTypes.object,
  /** Triggers a function on OnChange event, it returns the current value */
  onChange: PropTypes.func,
  /** Triggers a function before OnChange event */
  onBeforeChange: PropTypes.func,
  /** Triggers a function after OnChange event */
  onAfterChange: PropTypes.func,
  /** Triggers a function on Onclick event */
  onClick: PropTypes.func,
};

export default Slider;
