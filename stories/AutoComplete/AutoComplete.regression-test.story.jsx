import React from 'react';
import { AutoComplete } from '../../components';

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
  suggestions: [
    'teste1',
    'teste11',
    'teste111',
    'teste1111',
    'teste2',
    'teste3',
    'teste4',
    'teste5',
  ],
};
