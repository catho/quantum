import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleRight = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      placement="right"
      skin="error"
      trigger={<Button>This is a Popover right example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover right example
    </Popover>
  );
};

PopoverExampleRight.code = `import React from 'react';
import { Popover, Button } from '@catho/quantum';

const PopoverExampleRight = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      placement="right"
      skin="error"
      trigger={<Button>This is a Popover right example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover right example
    </Popover>
  );
};
`;

export default PopoverExampleRight;
