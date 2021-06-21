import React from 'react';

import { Tooltip, Button, Row, Col } from '../../components';

const tooltipExampleButton = ({ direction }) => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>
      <Tooltip placement={direction} text="This is a hint." visible>
        <Button>Hover me</Button>
      </Tooltip>
    </Col>
  </Row>
);

export default {
  title: 'Tooltip',
};

export const Top = tooltipExampleButton.bind(null);
Top.args = {
  direction: 'top',
};

export const Bottom = tooltipExampleButton.bind(null);
Bottom.args = {
  direction: 'bottom',
};

export const Left = tooltipExampleButton.bind(null);
Left.args = {
  direction: 'left',
};

export const Right = tooltipExampleButton.bind(null);
Right.args = {
  direction: 'right',
};

export const Multiline = () => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>
      <Tooltip
        placement="left"
        multiline
        text={`This is a hint\nin multiline\nmode.`}
        visible
      >
        <Button>Hover me</Button>
      </Tooltip>
    </Col>
  </Row>
);

Multiline.story = {
  name: 'multiline',
};
