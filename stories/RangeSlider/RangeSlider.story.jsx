import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import RangeSlider from '../../components/RangeSlider';

const Wrap = styled.div`
  width: 500px;
  padding: 50px 100px !important;
`;

storiesOf('Forms', module).add('RangeSlider', () => (
  <Wrap>
    <RangeSlider />
  </Wrap>
));
