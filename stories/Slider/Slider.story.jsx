import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoExample } from '../../.storybook/components';
import Slider from '../../components/Slider';
import Button from '../../components/Button';

storiesOf('11. Slider', module)
  .add('Slider', () => (
    <AutoExample
      component={Slider}
      componentProps={{ 
        tooltip: true, 
        min: 0, 
        max: 50,
        step: 10,
      }} 
    />
  ));
