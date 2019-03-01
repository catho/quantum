import React, { Component } from 'react';
import Slider from '../../../components/Slider';

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

    return <Slider value={value} onChange={this.handleChange} />;
  }
}

ControlledSlider.code = `
import React, { Component } from 'react';
import { Slider } from '@catho-private/quantum';

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
      <Slider value={value} onChange={this.handleChange} />
    );
  }
}
`;

export default ControlledSlider;
