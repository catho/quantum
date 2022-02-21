import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleBottom = () => (
  <Popover
    placement="bottom"
    skin="warning"
    trigger={<Button>This is a warning Popover bottom example</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    Here comes a new Popover Bottom example
  </Popover>
);

PopoverExampleBottom.code = `import { Popover, Button } from '@catho/quantum';

<Popover
  placement="bottom"
  skin="warning"
  trigger={<Button>This is a warning Popover bottom example</Button>}
  onClose={() => console.log('onClose prop triggered')}
>
  Here comes a new Popover Bottom example
</Popover>
`;

export default PopoverExampleBottom;
