import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import RadioButton from './RadioButton';

const stories = storiesOf('4. RadioButton', module);
stories
  .addDecorator(HowToImport)
  .add('RadioButton', () => (
    <div>
      <RadioButton id="radio" value="radio" name="radio">Radio Button</RadioButton>
      <RadioButton id="radioTwo" value="radioTwo" name="radio">Radio Button 2</RadioButton>
    </div>
  ));
