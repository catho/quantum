import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleRight = () => (
  <Popover
    placement="right"
    skin="error"
    trigger={<Button>This is an error Popover right example</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    Here comes a new Popover right example
  </Popover>
);

PopoverExampleRight.code = `import { Popover, Button } from '@catho/quantum';

<Popover
  placement="right"
  skin="error"
  trigger={<Button>This is an error Popover right example</Button>}
  onClose={() => console.log('onClose prop triggered')}
>
  Here comes a new Popover right example
</Popover>
`;

export default PopoverExampleRight;
