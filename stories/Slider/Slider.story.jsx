import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  AutoExample,
  Tab,
  Example,
  Title,
} from '@catho-private/quantum-storybook-ui';
import Slider from '../../components/Slider';

import { ControlledSlider, ControlledTwoHandles } from './sub-components';

const twoHandles = <Slider value={{ from: 0, to: 100 }} />;

const tipFormatter = <Slider tipFormatter={value => `R$ ${value}`} />;

const tabExample = (
  <Tab title="Example">
    <Title>With two handles</Title>
    <Example component={twoHandles} />
    <Title>tipFormatter</Title>
    <p>tipFormatter is a prop to format the tooltip value.</p>
    <Example
      component={tipFormatter}
      code="<Slider tipFormatter={value => `R$ ${value}`} />" // eslint-disable-line
    />
    <Title>Controlled</Title>
    <Example component={<ControlledSlider />} code={ControlledSlider.code} />
    <Title>Controlled with two handles</Title>
    <Example
      component={<ControlledTwoHandles />}
      code={ControlledTwoHandles.code}
    />
  </Tab>
);

storiesOf('12. Slider', module).add('Slider', () => (
  <AutoExample component={Slider} additionalTabs={tabExample} />
));
