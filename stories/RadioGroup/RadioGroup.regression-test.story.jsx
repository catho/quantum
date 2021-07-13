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

const disabledOptions = [...options];
disabledOptions[1] = {
  value: 'Mustard',
  label: 'Mustard',
  disabled: true,
};

export default {
  title: 'RadioGroup',
};

export const Default = () => <RadioGroup name="groceries" options={options} />;

Default.story = {
  name: 'default',
};

export const Error = () => (
  <RadioGroup name="groceries" options={options} error="message" />
);

Error.story = {
  name: 'error',
};

export const Disabled = () => (
  <RadioGroup name="groceries" options={disabledOptions} />
);

Disabled.story = {
  name: 'disabled',
};
