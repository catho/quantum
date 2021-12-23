import React from 'react';
import { AutoComplete } from '../../components';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

export default {
  title: 'AutoComplete',
  component: AutoComplete,
};

const Template = args => <AutoComplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'autoCompleteNew',
  name: 'autoCompleteNew',
  label: 'Auto Complete',
  suggestions: Examples,
};
