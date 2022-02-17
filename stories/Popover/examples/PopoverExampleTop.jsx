import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleTop = () => (
  <Popover
    trigger={<Button>This is a Popover top example</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    Here comes a new Popover Top example
  </Popover>
);

PopoverExampleTop.code = `import { Popover, Button } from '@catho/quantum';

<Popover
  trigger={<Button>This is a Popover top example</Button>}
  onClose={() => console.log('onClose prop triggered')}
>
  Here comes a new Popover Top example
</Popover>
`;

export default PopoverExampleTop;
