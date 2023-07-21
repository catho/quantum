import RangeSlider from '../../../components/RangeSlider';

const TipFormatter = (aditionalProps) => (
  <RangeSlider tipFormatter={(value) => `R$ ${value}`} {...aditionalProps} />
);

TipFormatter.code = '<RangeSlider tipFormatter={value => `R$ ${value}`} />'; // eslint-disable-line

export default TipFormatter;
