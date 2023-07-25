import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default {
  title: 'Forms/Form',
  component: Form,
};

export const ValidationList = () => (
  <ul>
    {Object.getOwnPropertyNames(Validations)
      .filter(name => !['name', 'length', 'prototype'].includes(name))
      .map(validate => (
        <li key={validate}>{validate}</li>
      ))}
  </ul>
);

const Template = args => {
  const { children, ...rest } = args;
  return (
    <Form {...rest}>
      {children}
      <Button name="submit" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <Input name="firstName" label="Name" />,
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  children: (
    <Input
      name="firstName"
      label="Name"
      validate={Validations.MinLength}
      minLength={5}
    />
  ),
};

export const WithCustomValidation = Template.bind({});
WithCustomValidation.args = {
  children: (
    <>
      <Input
        name="email"
        label="Required"
        validate={[
          Validations.Required,
          {
            validate: Validations.Email,
            error: 'We need a valid e-mail',
          },
        ]}
      />
      <Input
        name="catho"
        label="This field only accepts Catho as a value"
        validate={({ value }) => (value === 'Catho' ? '' : 'Catho, please')}
      />
    </>
  ),
};
