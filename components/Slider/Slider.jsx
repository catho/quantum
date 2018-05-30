import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SliderComponent from 'rc-slider';
import Colors from '../Colors';
import Tooltip from '../Tooltip';
import theme from '../../theme';

const StyledSlider = styled(SliderComponent)`
  .rc-slider-handle {
    border: none;
    box-shadow: 0 0 5px ${Colors.GREY['600']}4D;
    margin-left: -10px;
    width: 20px;
    height: 20px;
    transition: border 0.1s, box-shadow 0.1s;

    &:hover {
      box-shadow: 0 0 1px 5px ${Colors.SECONDARY['500']}80;
    }

    &:active {
      border: 1px solid ${Colors.SECONDARY['500']};
      box-shadow: none;
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
`;

const Handle = SliderComponent.Handle;

const handle = ({ value, dragging, index, offset, ...restProps }) => {
  console.log(restProps);
  return (
    <Tooltip slider offset={offset} text={value}>
      <Handle value={value} offset={offset} {...restProps} />
    </Tooltip>
  );
};

const Slider = () => (
  <StyledSlider
    min={0}
    max={200}
    handle={handle}
    marks={{
      0: '0',
      50: '50',
      100: '100',
      150: '150',
      200: '200',
    }}
  />
);

Slider.defaultProps = {
};

Slider.propTypes = {
};

export default Slider;
