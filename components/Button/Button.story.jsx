import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Button from './Button';

const stories = storiesOf('Button', module);
stories
  .addDecorator(HowToImport)
  .add('Button', () => (
    <Button>Click me!</Button>
  ));
