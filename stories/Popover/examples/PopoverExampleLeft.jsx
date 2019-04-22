import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleLeft = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Popover
        visible
        placement="left"
        skin="success"
        trigger={<Button>This is a Popover left example</Button>}
        onClose={onCloseFn}
      >
        Here comes a new Popover left example
      </Popover>
    </div>
  );
};

PopoverExampleLeft.code = `import React from 'react';
import { Popover, Button } from '@catho/quantum';

const PopoverExampleLeft = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      placement="left"
      skin="success"
      trigger={<Button>This is a Popover left example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover left example
    </Popover>
  );
};
`;

export default PopoverExampleLeft;
