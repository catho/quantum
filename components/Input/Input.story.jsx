import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Input from './Input';

storiesOf('4. Input', module)
  .addDecorator(HowToImport)
  .add('Input', () => (
    <React.Fragment>
      <Input label="Default" id="default-input" />
      <Input label="With error" error="Error message" id="error-input" />
    </React.Fragment>
  ));
