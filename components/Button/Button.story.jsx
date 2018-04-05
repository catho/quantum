import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Button from './Button';

const stories = storiesOf('3. Buttons', module);
stories
  .addDecorator(HowToImport)
  .add('Button', () => (
    <React.Fragment>
      <Button>Click me!</Button>
      <Button skin="solid-alpha">Click me!</Button>
      <Button skin="solid-alpha">Click me!</Button>
      <Button skin="solid-beta">Click me!</Button>
      <Button skin="solid-white">Click me!</Button>
      <Button skin="link">Click me!</Button>
      <Button disabled>Click me!</Button>
    </React.Fragment>
  ));
