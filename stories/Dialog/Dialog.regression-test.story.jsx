import React from 'react';
import { Dialog } from '../../components';
import Example from './ExampleStyle';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template = args => <Dialog {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  selector: '#regression-test',
};

export const WithContent = Template.bind({});
WithContent.args = {
  ...Simple.args,
  children: (
    <Example>
      <h3>Some text</h3>
    </Example>
  ),
  shouldOpen: true,
};
