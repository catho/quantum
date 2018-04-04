import React from 'react';
import { storiesOf } from '@storybook/react';
import Props from '../../.storybook/decorators/Props';
import TestProps from '../../components/TestProps';

storiesOf('3. TestProps', module)
  .add('Testing dynamic props', () => (
    <React.Fragment>
      <Props component={TestProps} />
    </React.Fragment>
  ));
