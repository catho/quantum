import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleBottom extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="bottom"
        skin="warning"
        text="Here comes a new Popover Top example"
        onClose={this.onCloseFn}
      >
        <Button>This is a Popover bottom Example</Button>
      </Popover>
    );
  }
}

PopoverExampleBottom.code = `
import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleBottom extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="bottom"
        skin="warning"
        text="Here comes a new Popover Top example"
        onClose={this.onCloseFn}
      >
        <Button>This is a Popover Top Example</Button>
      </Popover>
    );
  }
}
`;

export default PopoverExampleBottom;
