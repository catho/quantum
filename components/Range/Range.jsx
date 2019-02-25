import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';

const RangeComponent = Slider.Range;
const SliderComponent = Slider;

const tooltipOffset = ({ half, min, max }) => {
  const percent = ((half - min) / (max - min)) * 100;

  return percent;
};

const StyledTooltip = styled(Tooltip)`
  width: 100%;
  > div:first-child {
    left: ${({ value, min, max }) => {
      let half = value;
      if (Array.isArray(value)) {
        half = (value[1] + value[0]) / 2;
      }
      return tooltipOffset({ half, min, max });
    }}%;
  }
`;

class Range extends React.Component {
  constructor(props) {
    super(props);

    const { value: valueProp, max, min } = this.props;
    const value = valueProp >= min && valueProp <= max ? valueProp : min;

    this.state = { value };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { min, max } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    console.log(value);

    return (
      <StyledTooltip text={value} value={value} min={min} max={max}>
        {typeof value === 'object' ? (
          <RangeComponent
            value={[value.from, value.to]}
            onChange={handleChange}
            min={min}
            max={max}
            allowCross={false}
          />
        ) : (
          <SliderComponent
            onChange={handleChange}
            value={value}
            min={min}
            max={max}
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
