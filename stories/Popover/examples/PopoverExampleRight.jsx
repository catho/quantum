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
        trigger={<Button>This is a Popover right example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover right example
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
        trigger={<Button>This is a Popover right example</Button>}
        onClose={this.onCloseFn}
      >
        Here comes a new Popover right example
      </Popover>
    );
  }
}
`;

export default PopoverExampleRight;
