import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleTop extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        text="Here comes a new Popover Top example"
        onClose={this.onCloseFn}
      >
        <Button>This is a Popover Top Example</Button>
      </Popover>
    );
  }
}

PopoverExampleTop.code = `
import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleTop extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        text="Here comes a new Popover Top example"
        onClose={this.onCloseFn}
      >
        <Button>This is a Popover Top Example</Button>
      </Popover>
    );
  }
}
`;

export default PopoverExampleTop;
