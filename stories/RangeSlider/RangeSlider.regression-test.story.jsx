import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col } from '../../components';
import rangeSliderUtils from '../../components/RangeSlider/utils';

import {
  BasicRangeSlider,
  TipFormatter,
  Range,
  MinMax,
  BasicDisabledRangeSlider,
} from './examples';

const sliderProps = {
  valueLabelDisplay: 'on',
};

const { mountMarksByArray } = rangeSliderUtils;

const components = [
  { name: 'default', el: <BasicRangeSlider {...sliderProps} /> },
  {
    name: 'with marks',
    el: (
      <BasicRangeSlider marks={mountMarksByArray([0, 100])} {...sliderProps} />
    ),
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
  {
    name: 'MinMax',
    el: <MinMax min={30} max={50} value={40} {...sliderProps} />,
  },
  {
    name: 'BasicDisabledSlider',
    el: <BasicDisabledRangeSlider {...sliderProps} />,
  },
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
