import React from 'react';

import { Popover, Button, Row, Col } from '../../components';

const handleDirectionPosition = direction => {
  if (direction === 'right') return { paddingTop: '80px', paddingLeft: '20px' };
  if (direction === 'bottom')
    return { paddingTop: '20px', paddingLeft: '160px' };
  return { paddingTop: '80px', paddingLeft: '160px' };
};

const popoverExample = ({ direction, skin }) => (
  <div>
    <Row style={handleDirectionPosition(direction)}>
      <Col>
        <Popover
          placement={direction}
          skin={skin}
          trigger={<Button>Popover trigger</Button>}
          visible
        >
          Some text
        </Popover>
      </Col>
    </Row>
  </div>
);

export default {
  title: 'Popover',
};

export const NeutralTop = popoverExample.bind(null);
NeutralTop.args = {
  direction: 'top',
  skin: 'neutral',
};

export const NeutralBottom = popoverExample.bind(null);
NeutralBottom.args = {
  direction: 'bottom',
  skin: 'neutral',
};

export const NeutralLeft = popoverExample.bind(null);
NeutralLeft.args = {
  direction: 'left',
  skin: 'neutral',
};

export const NeutralRight = popoverExample.bind(null);
NeutralRight.args = {
  direction: 'right',
  skin: 'neutral',
};

export const PrimaryTop = popoverExample.bind(null);
PrimaryTop.args = {
  direction: 'top',
  skin: 'primary',
};

export const PrimaryBottom = popoverExample.bind(null);
PrimaryBottom.args = {
  direction: 'bottom',
  skin: 'primary',
};

export const PrimaryLeft = popoverExample.bind(null);
PrimaryLeft.args = {
  direction: 'left',
  skin: 'primary',
};

export const PrimaryRight = popoverExample.bind(null);
PrimaryRight.args = {
  direction: 'right',
  skin: 'primary',
};

export const SuccessTop = popoverExample.bind(null);
SuccessTop.args = {
  direction: 'top',
  skin: 'success',
};

export const SuccessBottom = popoverExample.bind(null);
SuccessBottom.args = {
  direction: 'bottom',
  skin: 'success',
};

export const SuccessLeft = popoverExample.bind(null);
SuccessLeft.args = {
  direction: 'left',
  skin: 'success',
};

export const SuccessRight = popoverExample.bind(null);
SuccessRight.args = {
  direction: 'right',
  skin: 'success',
};

export const WarningTop = popoverExample.bind(null);
WarningTop.args = {
  direction: 'top',
  skin: 'warning',
};

export const WarningBottom = popoverExample.bind(null);
WarningBottom.args = {
  direction: 'bottom',
  skin: 'warning',
};

export const WarningLeft = popoverExample.bind(null);
WarningLeft.args = {
  direction: 'left',
  skin: 'warning',
};

export const WarningRight = popoverExample.bind(null);
WarningRight.args = {
  direction: 'right',
  skin: 'warning',
};

export const ErrorTop = popoverExample.bind(null);
ErrorTop.args = {
  direction: 'top',
  skin: 'error',
};

export const ErrorBottom = popoverExample.bind(null);
WarningBottom.args = {
  direction: 'bottom',
  skin: 'error',
};

export const ErrorLeft = popoverExample.bind(null);
ErrorLeft.args = {
  direction: 'left',
  skin: 'error',
};

export const ErrorRight = popoverExample.bind(null);
ErrorRight.args = {
  direction: 'right',
  skin: 'error',
};
