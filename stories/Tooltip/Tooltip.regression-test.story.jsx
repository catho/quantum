import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip, Button } from '../../components';

const renderWithWrapper = children => (
  <div style={{ padding: '50px 150px' }}>{children}</div>
);

const directions = ['top', 'bottom', 'left', 'right'];

const tooltipExampleButton = direction =>
  renderWithWrapper(
    <Tooltip placement={direction} text="This is a hint." visible>
      <Button>Hover me</Button>
    </Tooltip>,
  );

directions.forEach(direction => {
  storiesOf('Tooltip', module).add(`${direction}`, () =>
    tooltipExampleButton(direction),
  );
});
