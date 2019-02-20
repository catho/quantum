import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  CodeExample,
  Example,
  TabbedView,
  Tab,
} from '@catho-private/quantum-storybook-ui';

import { Col, Row } from '../../components/Grid';
import Button from '../../components/Button';
import { Form, Validations } from '../../components/Form';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import * as SimpleForm from './SimpleForm';
import * as SimpleValidation from './SimpleValidation';
import * as AdvancedValidation from './AdvancedValidation';

const FormExample = (
  <Form style={{ width: '400px' }}>
    <Input
      name="first"
      label="First Name"
      validate={[
        {
          validate: Validations.Required,
        },
        Validations.MinLength,
      ]}
      minLength={3}
    />
    <Input
      name="last"
      label="Last Name"
      validate={[
        {
          validate: Validations.Required,
        },
        Validations.MinLength,
      ]}
      minLength={3}
    />
    <Input.Date name="date" label="Birthday" validate={Validations.Date} />
    <Checkbox
      onChange={e => {
        console.log(e.target.checked);
        // console.log(checked)
        console.log('alterou o compoente');
      }}
    />
    <input
      type="checkbox"
      onChange={e => {
        console.log(e.target.checked);
        console.log('alterou o nativo');
      }}
    />
    <Button type="submit"> Enviar </Button>
  </Form>
);

storiesOf('3. Forms', module).add('Validation', () => (
  <Heading title="<Form />">
    <TabbedView>
      <Tab title="Usage">
        <p>We provide a bunch of components to use in your form.</p>

        <p>
          To use it, you need to import the component itself and add some inputs
          as you like.
        </p>

        <h4>Simple form</h4>
        <Row>
          <Col desktop={6}>
            <CodeExample
              showTitle={false}
              withImport={['Form', 'Input', 'Button'].join(', ')}
              component={SimpleForm.Form}
              code={SimpleForm.Code}
            />
          </Col>

          <Col desktop={6}>
            <SimpleForm.Form />
          </Col>
        </Row>

        <p>
          Each child of <code>Form</code> has an property <code>validate</code>.
        </p>
        <p>
          It is not required but you can provide validations on it to be fired
          when your form is submitted.
        </p>

        <h4>Validate Example</h4>
        <Row>
          <Col desktop={6}>
            <CodeExample
              showTitle={false}
              withImport={['Form', 'Validations', 'Input', 'Button'].join(', ')}
              component={SimpleValidation.Form}
              code={SimpleValidation.Code}
            />
          </Col>

          <Col desktop={6}>
            <SimpleValidation.Form />
          </Col>
        </Row>

        <p>
          As you can see in the example above, we also provide some useful
          validations:
        </p>
        <ul>
          {Object.getOwnPropertyNames(Validations)
            .filter(name => !['name', 'length', 'prototype'].includes(name))
            .map(validate => (
              <li key={validate}>{validate}</li>
            ))}
        </ul>

        <p>You can add as many validations as you want!</p>
        <p>
          And you can write your custom validate function with custom error
          messages too!!!
        </p>

        <h4>Advanced Form</h4>
        <Row>
          <Col desktop={6}>
            <CodeExample
              showTitle={false}
              withImport={['Form', 'Validations', 'Input', 'Button'].join(', ')}
              component={AdvancedValidation.Form}
              code={AdvancedValidation.Code}
            />
          </Col>

          <Col desktop={6}>
            <AdvancedValidation.Form />
          </Col>
        </Row>
      </Tab>

      <Tab title="Example">
        <Example
          title="New User"
          importModules="Form"
          component={FormExample}
        />
      </Tab>
    </TabbedView>
  </Heading>
));
