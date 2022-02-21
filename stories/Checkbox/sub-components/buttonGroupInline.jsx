import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

const options = [
  { name: 'with-icon', label: 'With an Icon', icon: 'info' },
  { name: 'default', label: 'Default' },
  { name: 'checked', label: 'Checked', checked: true },
];

const buttonGroup = {
  code: `<CheckboxGroup
  name="inline-example"
  options={options}
  type="button"
  inline
/>`,
  component: (
    <CheckboxGroup
      name="inline-example"
      options={options}
      type="button"
      inline
    />
  ),
};

export default buttonGroup;
