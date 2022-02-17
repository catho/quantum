import { Row, Col, RangeSlider } from '../../components';
import rangeSliderUtils from '../../components/RangeSlider/utils';

import {
  BasicRangeSlider,
  TipFormatter as TipFormatterExample,
  Range as RangeExample,
  MinMax as MinMaxExample,
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
  component: RangeSlider,
  decorators: [decorator],
};

const Template = args => <BasicRangeSlider {...args} {...sliderProps} />;

export const Default = Template.bind({});

export const Disabled = () => <BasicDisabledRangeSlider {...sliderProps} />;

export const WithMarks = Template.bind({});
WithMarks.args = {
  marks: mountMarksByArray([0, 100]),
};

export const TipFormatter = () => <TipFormatterExample {...sliderProps} />;

export const TipFormatterWithMarks = () => (
  <TipFormatterExample
    {...sliderProps}
    marks={mountMarksByArray([0, 50, 100], v => `R$ ${v}`)}
  />
);

export const Range = () => <RangeExample {...sliderProps} />;

export const MinMax = () => (
  <MinMaxExample min={30} max={50} value={40} {...sliderProps} />
);
