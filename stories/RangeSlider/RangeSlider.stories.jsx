import { useState } from 'react';
import { RangeSlider } from '../../components';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
};

const marks = [
  {
    value: 0,
    label: '0 km',
  },
  {
    value: 50,
    label: '50 km',
  },
  {
    value: 100,
    label: '100 km',
  },
];

const Template = (args) => <RangeSlider {...args} />;

export const Default = Template.bind({});

export const WithMarks = Template.bind({});
WithMarks.args = {
  marks,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const MinAndMax = Template.bind({});
MinAndMax.args = {
  min: 30,
  max: 50,
  defaultValue: 40,
};

export const RangeUsage = Template.bind({});
RangeUsage.args = {
  defaultValue: {
    from: 20,
    to: 80,
  },
};

export const CustomTooltipText = Template.bind({});
CustomTooltipText.args = {
  tipFormatter: (value) => `R$ ${value}`,
};

export const ControlledExample = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, updatedValue) => {
    setValue(updatedValue);
  };

  return (
    <>
      Slider value: {value}
      <RangeSlider defaultValue={value} onChangeCommitted={handleChange} />
    </>
  );
};
