import React, { Component } from 'react';
import Slider from '../../../components/Slider';

class ControlledTwoHandles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        from: 0,
        to: 100,
      },
    };
  }

  handleChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return <Slider value={value} onChange={this.handleChange} />;
  }
}

ControlledTwoHandles.code = `
import React, { Component } from 'react';
import { Slider } from '@catho-private/quantum';

class ControlledTwoHandles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        from: 0,
        to: 100,
      },
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

export default ControlledTwoHandles;
