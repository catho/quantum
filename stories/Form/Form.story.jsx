import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import Example from '../../.storybook/components/Example';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Atom from '../static/atom.svg';

import Form from '../../components/Form/Form';
import Validate from '../../components/Form/validate';

const FormExample = (
  <Form style={{ width: '200px' }}>
    <Form.Input.CPF
      name="valid"
      label="CPF"
      validate={[
        {
          validate: Validate.REQUIRED,
          error: 'CARALEO',
        },
        Validate.MIN,
      ]}
      min={3}
    />

    <Form.Input.Date
      name="date"
      label="Date"
      validate={[
        Validate.MIN,
        {
          validate: Validate.DATE,
          error: 'DATA ERRADA',
        },
      ]}
      min={8}
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

  /**
   *
   */
