import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../../components';
import rangeSliderUtils from '../../components/RangeSlider/utils';

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

const { mountMarksByArray } = rangeSliderUtils;

const components = [
  { name: 'default', el: <Slider {...sliderProps} /> },
  {
    name: 'with marks',
    el: <Slider marks={mountMarksByArray([0, 100])} {...sliderProps} />,
  },
  { name: 'TipFormatter', el: <TipFormatter {...sliderProps} /> },
  {
    name: 'TipFormatter with marks',
    el: (
      <TipFormatter
        {...sliderProps}
        marks={mountMarksByArray([0, 50, 100], v => `R$ ${v}`)}
      />
    ),
  },
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
