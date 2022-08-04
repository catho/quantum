/* eslint-disable react/prop-types */
import { useState } from 'react';
import CheckboxGroup from '../../components/Checkbox/CheckboxGroup';

const options = [
  { label: 'Banana', name: 'banana' },
  { label: 'Orange', name: 'orange', checked: true },
  { label: 'Lemon', name: 'lemon', checked: true, disabled: true },
  { label: 'Strawberry', name: 'strawberry', disabled: true },
  { label: 'Blueberry', name: 'blueberry' },
];

const buttonGroupOptions = [
  { name: 'with-icon', label: 'With an Icon', icon: 'info' },
  { name: 'default', label: 'Default' },
  { name: 'checked', label: 'Checked', checked: true },
  { label: 'disabled', name: 'disabled', disabled: true },
];

const getChildren = () =>
  options.map(({ label, name, checked, disabled }) => (
    <>
      <CheckboxGroup.Checkbox
        label={label}
        name={name}
        checked={checked}
        disabled={disabled}
      />
    </>
  ));

const Template = ({ children, ...otherArgs }) => (
  <CheckboxGroup {...otherArgs}>{children}</CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  options,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: getChildren(),
};

export const WithSharedErrorMessage = Template.bind({});
WithSharedErrorMessage.args = {
  options,
  error: 'Some error',
};

export const ButtonGroup = Template.bind({});
ButtonGroup.args = {
  options: buttonGroupOptions,
  type: 'button',
};

export const Inline = Template.bind({});
Inline.args = {
  ...ButtonGroup.args,
  inline: true,
};

export const ControlledGroup = () => {
  const [items, setItems] = useState(options);

  return (
    <>
      <CheckboxGroup
        options={items}
        onChange={newItems => setItems(newItems)}
      />
      <p>State:</p>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </>
  );
};
