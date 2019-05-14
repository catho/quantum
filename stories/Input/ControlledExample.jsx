import React from 'react';
import Input from '../../components/Input';

class ControlledExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'this is a example text',
    };
  }

  onCleanFn = () => {
    this.setState({ value: '' });
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <Input
        label="Controlled example"
        value={value}
        onClean={this.onCleanFn}
        onChange={this.onChange}
      />
    );
  }
}

export default ControlledExample;

ControlledExample.code = `
class ControlledExample extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 'this is a example text',
    }
  }

  onCleanFn = () => {
    this.setState({ value: '' });
  };

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return <Input label="Controlled example" value={value} onClean={this.onCleanFn} onChange={this.onChange} />;
  }
}

export default ControlledExample;
`;
