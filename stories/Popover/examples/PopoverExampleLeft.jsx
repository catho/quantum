import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleLeft extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="left"
        skin="success"
        trigger={<Button>This is a Popover left example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover left example
      </Popover>
    );
  }
}

PopoverExampleLeft.code = `
import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleLeft extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="left"
        skin="success"
        trigger={<Button>This is a Popover left example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover left example
      </Popover>
    );
  }
}
`;

export default PopoverExampleLeft;
