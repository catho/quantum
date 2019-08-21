import React from 'react';
import { storiesOf } from '@storybook/react';

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

const stories = storiesOf('RadioGroup', module)
  .add('default', () => <RadioGroup name="groceries" options={options} />)
  .add('error', () => (
    <RadioGroup name="groceries" options={options} error={'message'} />
  ))
  .add('disabled', () => (
    <RadioGroup name="groceries" options={disabledOptions} />
  ));
