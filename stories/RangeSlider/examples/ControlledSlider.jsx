import React, { Component } from 'react';
import RangeSlider from '../../../components/RangeSlider';

class ControlledSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (_ev, value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <>
        Slider value: {value}
        <RangeSlider
          defaultValue={value}
          onChangeCommitted={this.handleChange}
        />
      </>
    );
  }
}

ControlledSlider.code = `
import React, { Component } from 'react';
import { RangeSlider } from '@catho/quantum';

class ControlledSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <>
         Slider value: {value}
         <RangeSlider defaultValue={value} onChangeCommitted={this.handleChange} />
      </>
    );
  }
}
`;

export default ControlledSlider;
