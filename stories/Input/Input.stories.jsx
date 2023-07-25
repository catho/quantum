import { useState } from 'react';
import { Input } from '../../components';

export default {
  title: 'Forms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

const TemplateWithType = ({ staticType, ...otherArgs }) => {
  const InputWithType = Input[staticType];

  return <InputWithType {...otherArgs} />;
};

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  label: 'With Label',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Some error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DescriptionLabel = Template.bind({});
DescriptionLabel.args = {
  descriptionLabel: 'Some description label',
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Some helper text',
};

export const Searchable = Template.bind({});
Searchable.args = {
  type: 'search',
};

export const CEP = TemplateWithType.bind({});
CEP.args = {
  staticType: 'CEP',
};

export const CNPJ = TemplateWithType.bind({});
CNPJ.args = {
  staticType: 'CNPJ',
};

export const CPF = TemplateWithType.bind({});
CPF.args = {
  staticType: 'CPF',
};

export const Date = TemplateWithType.bind({});
Date.args = {
  staticType: 'Date',
};

export const Phone = TemplateWithType.bind({});
Phone.args = {
  staticType: 'Phone',
};

export const Password = TemplateWithType.bind({});
Password.args = {
  staticType: 'Password',
};

export const Skin = Template.bind({});
Skin.args = {
  skin: 'dark',
};

export const ControlledExample = (props) => {
  const [value, setValue] = useState('This is an example text');

  const onClean = () => {
    setValue('');
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Input
      {...props}
      label="Controlled example"
      value={value}
      onClean={onClean}
      onChange={onChange}
    />
  );
};
