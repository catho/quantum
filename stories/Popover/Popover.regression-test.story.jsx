import React from 'react';
import { storiesOf } from '@storybook/react';

import { Popover, Button, Row, Col } from '../../components';
import { components } from '../../components/shared/theme';

const {
  popover: { skins: popoverSkins },
} = components;

const directions = ['top', 'bottom', 'left', 'right'];
const skins = Object.keys(popoverSkins);

const handleDirectionPosition = direction => {
  if (direction === 'right') return { paddingTop: '80px', paddingLeft: '20px' };
  if (direction === 'bottom')
    return { paddingTop: '20px', paddingLeft: '160px' };
  return { paddingTop: '80px', paddingLeft: '160px' };
};

const popoverExample = (direction, skin) => (
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

skins.forEach(skin => {
  directions.forEach(direction => {
    storiesOf('Popover', module).add(`${skin} ${direction}`, () =>
      popoverExample(direction, skin),
    );
  });
});
