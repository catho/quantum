import React from 'react';
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

const decorator = Story => (
  <Row style={{ padding: '50px 180px' }}>
    <Col>
      <Story />
    </Col>
  </Row>
);

export default {
  title: 'RangeSlider',
  decorators: [decorator],
};

export const Default = () => <BasicRangeSlider {...sliderProps} />;

export const WithMarks = () => (
  <BasicRangeSlider marks={mountMarksByArray([0, 100])} {...sliderProps} />
);

export const TipFormatterStory = () => <TipFormatter {...sliderProps} />;
TipFormatterStory.storyName = 'TipFormatter';

export const TipFormatterWithMarks = () => (
  <TipFormatter
    {...sliderProps}
    marks={mountMarksByArray([0, 50, 100], v => `R$ ${v}`)}
  />
);
TipFormatterWithMarks.storyName = 'TipFormatter with Marks';

export const RangeStory = () => <Range {...sliderProps} />;
RangeStory.storyName = 'Range';

export const MinMaxStory = () => (
  <MinMax min={30} max={50} value={40} {...sliderProps} />
);
MinMaxStory.storyName = 'MinMax';

export const BasicDisabledSliderStory = () => (
  <BasicDisabledRangeSlider {...sliderProps} />
);
BasicDisabledSliderStory.storyName = 'BasicDisabledSlider';
