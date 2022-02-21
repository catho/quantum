import Popover from '../../../components/Popover';
import Button from '../../../components/Button';

const PopoverExampleChildren = () => (
  <Popover
    trigger={<Button>This is a Popover example with chilren</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    <h5>Title of the Popover</h5>
    Here comes a new Popover children text
  </Popover>
);

PopoverExampleChildren.code = `import { Popover, Button } from '@catho/quantum';

  <Popover
    trigger={<Button>This is a Popover example with chilren</Button>}
    onClose={() => console.log('onClose prop triggered')}
  >
    <h5>Title of the Popover</h5>
    Here comes a new Popover children text
  </Popover>
`;

export default PopoverExampleChildren;
