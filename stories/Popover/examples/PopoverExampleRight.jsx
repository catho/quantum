import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleRight extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="right"
        skin="error"
        trigger={<Button>This is a Popover right Example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover Top example
      </Popover>
    );
  }
}

PopoverExampleRight.code = `
import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

class PopoverExampleRight extends React.Component {
  onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  render() {
    return (
      <Popover
        placement="right"
        skin="error"
        text="Here comes a new Popover Top example"
        onClose={this.onCloseFn}
      >
        <Button>This is a Popover Top Example</Button>
      </Popover>
    );
  }
}
`;

export default PopoverExampleRight;
