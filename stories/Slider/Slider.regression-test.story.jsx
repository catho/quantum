import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from '../../components/Slider';

storiesOf('Slider', module)
  .add('default', () => <Slider />)
  .add('disabled', () => <Slider disabled />)
  .add('min and max', () => <Slider min={30} max={50} value={40} />)
  .add('from to', () => <Slider value={{ from: 20, to: 80 }} />)
  .add('min max formmater', () => (
    <Slider minMaxFormatter={value => `R$ ${value}`} />
  ));
