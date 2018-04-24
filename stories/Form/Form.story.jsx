import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Example from '../../.storybook/components/Example';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Atom from '../static/atom.svg';

import { Form, Validations } from '../../components/Form';

const FormExample = (
  <Form style={{ width: '200px' }}>
    <Form.Input.CPF
      name="valid"
      label="CPF"
      validate={[
        {
          validate: Validations.Required,
          error: 'CARALEO',
        },
        Validations.MINLENGTH,
      ]}
      minLength={3}
    />

    <Form.Input.Date
      name="date"
      label="Date"
      validate={[
        Validations.MinLength,
        {
          validate: Validations.Date,
          error: 'DATA ERRADA',
        },
      ]}
      minLength={8}
    />

    <Form.Submit />


  </Form>
);

storiesOf('8. Form validation', module)
  .add('Input', () => (
    <Heading image={Atom} title="<Form />">
      <TabbedView>
        <Tab title="Usage">
          <div>Usage</div>
        </Tab>

        <Tab title="Example">
          <Example
            title="CEP"
            importModules="Form"
            component={FormExample}
          />
        </Tab>
      </TabbedView>
    </Heading>

  ));
