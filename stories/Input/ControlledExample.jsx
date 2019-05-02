import React from 'react';
import Input from '../../components/Input';

class ControlledExample extends React.Component {
  onCleanFn = () => {
    console.log('onClean callback was called!');
  };

  render() {
    return (
      <>
        <Input value="A example of text here" onClean={this.onCleanFn} />
      </>
    );
  }
}

export default ControlledExample;

ControlledExample.code = `
import React from 'react';
import Input from '../../components/Input';

class ControlledExample extends React.Component {

  onCleanFn = () => {
    console.log('onClean callback was called!');
  }

  render() {
    return(
      <>
        <Input value="A example of text here" onClean={this.onCleanFn} />
      </>
    )
  };
}

export default ControlledExample;
`;
