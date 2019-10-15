import React from 'react';
import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleBottom = () => (
  <Tooltip placement="bottom" text="This is a hint.">
    <Button full="true">Hover me</Button>
  </Tooltip>
);

TooltipExampleBottom.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip
  placement="bottom"
  text="This is a hint."
>
  <Button full="true">Hover me</Button>
</Tooltip>
`;

export default TooltipExampleBottom;
