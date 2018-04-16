import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

const stories = storiesOf('3. Forms', module);
stories
  .add('Radio Button', () => (
    <RadioGroup>
      <Radio id="radio" value="radio" name="radio" label="Click me!" />
      <Radio id="radioTwo" value="radioTwo" name="radio" label="Click me!" />
    </RadioGroup>
  ));
