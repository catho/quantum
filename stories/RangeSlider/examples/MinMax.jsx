import RangeSlider from '../../../components/RangeSlider';

const MinMax = (aditionalProps) => (
  <RangeSlider min={30} max={50} defaultValue={40} {...aditionalProps} />
);

MinMax.code = '<RangeSlider min={30} max={50} value={40} />';

export default MinMax;
