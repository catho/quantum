import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

const stories = storiesOf('4. Forms', module);
stories
  .addDecorator(HowToImport)
  .add('Radio Button', () => (
    <RadioGroup>
      <Radio id="radio" value="radio" name="radio" label="Click me!" />
      <Radio id="radioTwo" value="radioTwo" name="radio" label="Click me!" />
    </RadioGroup>
  ));
