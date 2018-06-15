import React from 'react';
import { Form } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SimpleForm = () => (
  <Form >
    <Input
      name="firstName"
      label="name"
    />
    <Button
      name="submit"
      type="submit"
    >
      Enviar
    </Button>
  </Form>
);

const SimpleFormCode = `
<Form>
  <Input
    name="firstName"
    placeholder="name"
  />
  <Button
    name="submit"
    type="submit"
  >
    Enviar
  </Button>
</Form>`;

export {
  SimpleForm as Form,
  SimpleFormCode as Code,
};
