import RangeSlider from '../../../components/RangeSlider';

const BasicRangeSlider = (aditionalProps) => (
  <RangeSlider defaultValue={50} {...aditionalProps} />
);

BasicRangeSlider.code = '<RangeSlider defaultValue={50} />';
BasicRangeSlider.codeWithMarks =
  '<RangeSlider marks={marks} defaultValue={50} />';

export default BasicRangeSlider;
