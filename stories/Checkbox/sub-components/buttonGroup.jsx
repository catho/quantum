import React from 'react';
import { CheckboxGroup } from '../../../components/Checkbox';

const options = [
  { name: 'with-icon', label: 'With an Icon', icon: 'info' },
  { name: 'default', label: 'Default' },
  { name: 'checked', label: 'Checked', checked: true },
];

export default {
  code: `const options = ${JSON.stringify(options, null, 2)};

<CheckboxGroup options={options} type="button" />

/* or */

<CheckboxGroup>
  <CheckboxGroup.Button value="with-icon" icon="info">
    With an Icon
  </CheckboxGroup.Button>
  <CheckboxGroup.Button value="default">
    Default
  </CheckboxGroup.Button>
</CheckboxGroup>`,
  component: <CheckboxGroup options={options} type="button" />,
};
