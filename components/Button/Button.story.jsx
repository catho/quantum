import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Button from './Button';

const stories = storiesOf('3. Buttons', module);
stories
  .addDecorator(HowToImport)
  .add('Button', () => (
    <React.Fragment>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button hollow>Hollow</Button>
      <Button light>Light</Button>
      <Button link>Link</Button>
      <Button disabled>Disabled</Button>
    </React.Fragment>
  ));
