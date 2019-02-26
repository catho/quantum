import React from 'react';
import { storiesOf } from '@storybook/react';

import Range from '../../components/Range';

storiesOf('3. Forms', module).add('Range', () => (
  <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Range
      min={0}
      max={100}
      value={{
        from: 15,
        to: 25,
      }}
    />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Range />
  </>
));
