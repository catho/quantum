import React from 'react';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleLeft = () => (
  <Popover
    placement="left"
    skin="success"
    trigger={<Button>This is a success Popover left example</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    Here comes a new Popover left example
  </Popover>
);

PopoverExampleLeft.code = `import { Popover, Button } from '@catho/quantum';

<Popover
  placement="left"
  skin="success"
  trigger={<Button>This is a success Popover left example</Button>}
  onClose={() => console.log('onClose prop triggered'))}
>
  Here comes a new Popover left example
</Popover>
`;

export default PopoverExampleLeft;
