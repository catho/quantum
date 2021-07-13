import React from 'react';

import RadioGroup from '../../components/RadioGroup';

const options = [
  {
    value: 'Tomato sauce',
    label: 'Tomato sauce',
  },
  {
    value: 'Mustard',
    label: 'Mustard',
  },
  {
    value: 'Barbecue sauce',
    label: 'Barbecue sauce',
  },
];

const disabledOptions = [
  {
    value: 'Mustard',
    label: 'Mustard',
    disabled: true,
  },
  ...options,
];

export default {
  title: 'RadioGroup',
  component: RadioGroup,
};

const Template = args => (
  <RadioGroup name="groceries" options={options} {...args} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: 'message',
};

export const Disabled = () => (
  <RadioGroup name="groceries" options={disabledOptions} />
);
Disabled.args = {
  options: disabledOptions,
};
