import React from 'react';
import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AdvancedValidation = () => (
  <Form>
    <Input
      name="email"
      placeholder="Required"
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
      placeholder="This field only accepts catho as a value"
      validate={
        ({ value }) => (value === 'Catho' ? '' : 'Catho, please')
      }
    />
    <Button
      name="submit"
      type="submit"
    >
      Enviar
    </Button>
  </Form>
);

const AdvancedValidationCode = `
<Form>
  <Input
    name="sixrequired"
    placeholder="Required and maximun of 6"
    validate={[
      Validations.Required,
      {
        validate: Validations.MaxLength,
        erro: 'Max of 6 characters!',
      },
    ]}
    maxLength={6}
  />
  <Input
    name="catho"
    placeholder="This field only accepts catho as a value"
    validate={
      ({ value }) => (value === 'Catho' ? '' : 'Catho, please')
    }
  />
  <Button
    name="submit"
    type="submit"
  >
    Enviar
  </Button>
</Form>
`;

export {
  AdvancedValidation as Form,
  AdvancedValidationCode as Code,
};
