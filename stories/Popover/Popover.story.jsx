import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '@catho/quantum-storybook-ui';
import Popover from '../../components/Popover';

storiesOf('Popover', module).add('Popover', () => (
  <>
    <AutoExample
      component={Popover}
      componentProps={{
        children: <p>Popover me</p>,
        text:
          'Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec Lorem ipsum dolor avec.',
      }}
    />
  </>
));
