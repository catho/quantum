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
        trigger={<Button>This is a Popover bottom example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover Bottom example
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
        trigger={<Button>This is a Popover bottom example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover Bottom example
      </Popover>
    );
  }
}
`;

export default PopoverExampleBottom;
