import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleBottom = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      placement="bottom"
      skin="warning"
      trigger={<Button>This is a Popover bottom example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover Bottom example
    </Popover>
  );
};

PopoverExampleBottom.code = `import React from 'react';
import { Popover, Button } from '@catho/quantum';

const PopoverExampleBottom = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      placement="bottom"
      skin="warning"
      trigger={<Button>This is a Popover bottom example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover Bottom example
    </Popover>
  );
};
`;

export default PopoverExampleBottom;
