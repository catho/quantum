import React from 'react';
import Tooltip from '../../../components/Tooltip';
import Button from '../../../components/Button';

const TooltipExampleMultiline = () => (
  <Tooltip text={`This is a hint\nin multiline\nmode.`} multiline>
    <Button full>Hover me</Button>
  </Tooltip>
);

TooltipExampleMultiline.code = `import { Tooltip, Button } from '@catho/quantum';

<Tooltip
  text={\`This is a hint\\nin multiline\\nmode.\`}
  multiline
>
  <Button full>Hover me</Button>
</Tooltip>
`;

export default TooltipExampleMultiline;
