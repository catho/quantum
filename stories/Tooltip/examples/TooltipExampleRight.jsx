import React from 'react';
import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleRight = () => (
  <Tooltip placement="right" text="This is a hint.">
    <Button full="true">Hover me</Button>
  </Tooltip>
);

TooltipExampleRight.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip
  placement="right"
  skin="error"
  trigger={<Button>This is an error Tooltip right example</Button>}
  onClose={() => console.log('onClose prop triggered')}
>
  Here comes a new Tooltip right example
</Tooltip>
`;

export default TooltipExampleRight;
