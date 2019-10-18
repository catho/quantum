import React from 'react';
import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleRight = () => (
  <Tooltip placement="right" text="This is a hint.">
    <Button full>Hover me</Button>
  </Tooltip>
);

TooltipExampleRight.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip placement="right" text="This is a hint.">
  <Button full>Hover me</Button>
</Tooltip>
`;

export default TooltipExampleRight;
