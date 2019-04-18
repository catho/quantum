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
        trigger={<Button>This is a Popover top example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover Top example
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
      <Popover trigger={<Button>This is a Popover top example</Button>} onClose={this.onCloseFn}>
        Here comes a new Popover Top example
      </Popover>
    );
  }
}
`;

export default PopoverExampleTop;
