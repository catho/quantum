import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SimpleValidation = () => (
  <Form>
    <Input
      name="min"
      label="Digit at least 5 characters"
      validate={Validations.MinLength}
      minLength={5}
    />

    <Button name="submit" type="submit">
      Submit
    </Button>
  </Form>
);

const SimpleValidationCode = `<Form>
  <Input
    name="min"
    placeholder="Digit at least 5 characters"
    validate={Validations.MinLength}
    minLength={5}
  />

  <Button
    name="submit"
    type="submit"
  >
    Submit
  </Button>
</Form>`;

export { SimpleValidation as Form, SimpleValidationCode as Code };
