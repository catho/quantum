import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Toggle from '../../components/Toggle';

const stories = storiesOf('7. Toggle', module);
stories
  .add('Toggle', () => (
    <AutoExample
      component={Toggle}
      componentProps={{
        id: 'toggle',
      }}
    />
  ));
