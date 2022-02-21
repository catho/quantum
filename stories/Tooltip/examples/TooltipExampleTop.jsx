import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleTop = () => (
  <Tooltip placement="top" text="This is a hint.">
    <Button full>Hover me</Button>
  </Tooltip>
);

TooltipExampleTop.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip
  placement="top"
  text="This is a hint."
>
  <Button full>Hover me</Button>
</Tooltip>
`;

export default TooltipExampleTop;
