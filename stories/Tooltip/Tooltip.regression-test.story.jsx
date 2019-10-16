import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip, Button, Row, Col } from '../../components';

const directions = ['top', 'bottom', 'left', 'right'];

const tooltipExampleButton = direction => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>
      <Tooltip placement={direction} text="This is a hint." visible>
        <Button>Hover me</Button>
      </Tooltip>
    </Col>
  </Row>
);

directions.forEach(direction => {
  storiesOf('Tooltip', module).add(`${direction}`, () =>
    tooltipExampleButton(direction),
  );
});
