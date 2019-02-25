import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho-private/quantum-storybook-ui';

import Range from '../../components/Range';

storiesOf('3. Forms', module).add('Range', () => (
  <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Range
      max={30}
      min={10}
      value={{
        from: 15,
        to: 25,
      }}
    />
  </>
));
