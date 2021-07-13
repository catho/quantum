import React from 'react';
import mockedProps, {
  mockWithFirstItemOpened,
  mockWithLastItemOpened,
  mockWithAllItemsClosed,
} from '../../components/Accordion/mock';

import { Accordion } from '../../components';

export default {
  title: 'Accordion',
  component: Accordion,
};

const Template = args => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = { ...mockedProps };

export const FirstItemOpened = Template.bind({});
FirstItemOpened.args = { ...mockWithFirstItemOpened };

export const LastItemOpened = () => <Accordion {...mockWithLastItemOpened} />;
LastItemOpened.args = { ...mockWithLastItemOpened };

export const AllItemsClosed = Template.bind({});
AllItemsClosed.args = { ...mockWithAllItemsClosed };
