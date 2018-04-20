import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '../../components/Form/Form';

import Validate from '../../components/Form/validate';

storiesOf('8. Form validation', module)
  .add('Input', () => (
    <Form>
      <Form.Input.CPF
        name="valid"
        label="CPF"
        validate={Validate.CPF}
        required
      />

      <Form.Input.CEP
        name="invalid"
        label="CEP"
        validate={Validate.CEP}
      />

      <Form.Submit
        skin="default"
      >
        ENVIA ESSA MERDA
      </Form.Submit>
    </Form>
  ));
