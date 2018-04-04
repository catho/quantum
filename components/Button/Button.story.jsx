import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Button', module)
  .add('Button component', () => (
    <Button>Hello Button</Button>
  ));
