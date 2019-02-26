import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';

const RangeComponent = Slider.Range;
const SliderComponent = Slider;

const StyledTooltip = styled(Tooltip)`
  width: 100%;
  > div:first-child {
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
    const value =
      typeof valueProp === 'object'
        ? valueProp
        : valueProp >= min && valueProp <= max
        ? valueProp
        : min;

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
    const { value } = this.state;
    const { handleChange, props } = this;

    const tooltipText =
      typeof value === 'object' ? `${value.from} a ${value.to}` : value;

    return (
      <StyledTooltip {...props} text={tooltipText} value={value}>
        {typeof value === 'object' ? (
          <RangeComponent
            {...props}
            allowCross={false}
            pushable
            onChange={handleChange}
            value={[value.from, value.to]}
            tabIndex={[null, null, null]}
          />
        ) : (
          <SliderComponent {...props} onChange={handleChange} value={value} />
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
