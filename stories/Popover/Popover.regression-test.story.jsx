import React from 'react';
import { storiesOf } from '@storybook/react';

import { Popover, Button, Row, Col } from '../../components';
import { components } from '../../components/shared/theme';

const {
  popover: { skins: popoverSkins },
} = components;

const directions = ['top', 'bottom', 'left', 'right'];
const skins = Object.keys(popoverSkins);

const popoverExample = (direction, skin) => (
  <div>
    <Row style={{ paddingTop: '100px', paddingLeft: '420px' }}>
      <Col>
        <Popover
          placement={direction}
          skin={skin}
          trigger={<Button>Popover trigger</Button>}
          visible
        >
          Here comes a new Popover example
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
