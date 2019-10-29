import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../../components';

import {
  Slider,
  TipFormatter,
  Range,
  MinMax,
  BasicDisabledSlider,
} from './examples';

const sliderProps = {
  valueLabelDisplay: 'on',
};

const components = [
  { name: 'default', el: <Slider {...sliderProps} /> },
  { name: 'TipFormatter', el: <TipFormatter {...sliderProps} /> },
  { name: 'Range', el: <Range {...sliderProps} /> },
  { name: 'MinMax', el: <MinMax {...sliderProps} /> },
  { name: 'BasicDisabledSlider', el: <BasicDisabledSlider {...sliderProps} /> },
];

const renderComponents = component => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>{component.el}</Col>
  </Row>
);

components.forEach(component => {
  storiesOf('RangeSlider', module).add(`${component.name}`, () =>
    renderComponents(component),
  );
});
