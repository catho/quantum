import React from 'react';
import { storiesOf } from '@storybook/react';
import 'rc-slider/assets/index.css';
import Slider from '../../components/Slider';


storiesOf('11. Slider', module)
  .add('Slider', () => (
    <React.Fragment>
      Esaease
      <br />
      <br />
      <br />
      <br />
      <Slider />
    </React.Fragment>
  ));
