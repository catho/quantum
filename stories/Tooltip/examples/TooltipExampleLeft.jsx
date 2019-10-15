import React from 'react';
import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleLeft = () => (
  <Tooltip placement="left" text="This is a hint.">
    <Button full="true">Hover me</Button>
  </Tooltip>
);

TooltipExampleLeft.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip
  placement="left"
  text="This is a hint."
>
  <Button full="true">Hover me</Button>
</Tooltip>
`;

export default TooltipExampleLeft;
