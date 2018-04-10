import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Textarea from './Textarea';

const stories = storiesOf('4. Forms', module);
stories
  .addDecorator(HowToImport)
  .add('Textarea', () => (
    <React.Fragment>
      <Textarea id="default" name="default" label="Default" placeholder="Default" />
      <Textarea id="maxlength" name="maxlength" label="With maxLength" placeholder="With maxLength" maxLength="50" />
      <Textarea id="error" name="error" label="With error" placeholder="With error" errorMessage="Error message" maxLength="50" />
    </React.Fragment>
  ));
