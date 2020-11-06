import React from 'react';
import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const AdvancedValidation = () => (
  <Form>
    <h1>Advanced Validation</h1>
    <div>
      <div>
        <Input
          name="catho3"
          label="3o nivel sem email"
          key="element-input3-2"
          validate={({ value }) => (value === 'Catho' ? '' : 'Catho, please')}
        />
      </div>
      <Input
        name="usr[catho2]"
        label="2o nivel"
        key="element-input2"
        validate={[
          Validations.Required,
          {
            validate: Validations.Email,
            error: 'We need a valid e-mail 2',
          },
        ]}
      />
    </div>
    <Input
      key="element-input1"
      name="catho1"
      label="1o nivel"
      validate={[
        Validations.Required,
        {
          validate: Validations.Email,
          error: 'We need a valid e-mail 1',
        },
      ]}
    />
    <Button key="element-button" name="submit" type="submit">
      Submit
    </Button>
  </Form>
);

const AdvancedValidationCode = `<Form>
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
    validate={
      ({ value }) => (value === 'Catho' ? '' : 'Catho, please')
    }
  />
  <Button
    name="submit"
    type="submit"
  >
    Submit
  </Button>
</Form>`;

export { AdvancedValidation as Form, AdvancedValidationCode as Code };
