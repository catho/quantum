import React from 'react';
import Input from '../../components/Input';
import ControlledExample from './ControlledExample';

export default [
  {
    code: '<Input.CEP label="CEP" />',
    component: <Input.CEP label="CEP" />,
  },
  {
    code: '<Input.CNPJ label="CNPJ" />',
    component: <Input.CNPJ label="CNPJ" />,
  },
  {
    code: '<Input.CPF label="CPF" />',
    component: <Input.CPF label="CPF" />,
  },
  {
    code: '<Input.Date label="Date" />',
    component: <Input.Date label="Date" />,
  },
  {
    code: '<Input.Phone label="Phone" />',
    component: <Input.Phone label="Phone" />,
  },
  {
    code: '<Input.Password label="Password Type" />',
    component: <Input.Password label="Password Type" />,
  },
  {
    code: '<Input label="Searchable" type="search" />',
    component: <Input label="Searchable" type="search" />,
  },
  {
    code: '<Input label="With an error" error="Error here" />',
    component: <Input label="With an error" error="Error here" />,
  },
  {
    code: '<Input label="Disabled" disabled value="some text" />',
    component: <Input label="Disabled" disabled value="some text" />,
  },
  {
    code: `<Input
  label="With a description label"
  descriptionLabel="Description here"
/>`,
    component: (
      <Input
        label="With a description label"
        descriptionLabel="Description here"
      />
    ),
  },
  {
    code: `<Input
  label="With a helper text"
  helperText="Helper here"
/>`,
    component: <Input label="With a helper text" helperText="Helper here" />,
  },
  {
    code: ControlledExample.code,
    component: <ControlledExample />,
  },
];

export const skinDark = {
  code: `<Input
skin="dark"
label="With a helper text and Dark Skin"
placeholder="Some placeholder"
helperText="Helper here"
/>`,
  component: (
    <Input
      skin="dark"
      label="With a helper text and Dark Skin"
      placeholder="Some placeholder"
      helperText="Helper here"
    />
  ),
};
