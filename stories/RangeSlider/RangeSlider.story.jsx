import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import RangeSlider from '../../components/RangeSlider';

const Wrap = styled.div`
  width: 500px;
  padding: 50px 100px !important;
`;

const valuetext = v => `${v.toString()}°C`;

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: 'Salário maior que R$10.000',
  },
];

storiesOf('Forms', module).add('RangeSlider', () => (
  <Wrap>
    <h2 id="discrete-slider">Temperature</h2>
    <RangeSlider
      step={10}
      min={0}
      max={100}
      marks={marks}
      tipFormatter={valuetext}
      defaultValue={[30, 50]}
      track="inverted"
    />
  </Wrap>
));
