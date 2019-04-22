import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleTop = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      trigger={<Button>This is a Popover top example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover Top example
    </Popover>
  );
};

PopoverExampleTop.code = `import React from 'react';
import { Popover, Button } from '@catho/quantum';

const PopoverExampleTop = () => {
  const onCloseFn = () => {
    console.log('onClose prop triggered!');
  };

  return (
    <Popover
      trigger={<Button>This is a Popover top example</Button>}
      onClose={onCloseFn}
    >
      Here comes a new Popover Top example
    </Popover>
  );
};
`;

export default PopoverExampleTop;
