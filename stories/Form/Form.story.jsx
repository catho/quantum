import React from 'react';
import {
  Heading,
  CodeExample,
  SimpleHighlight,
  Title,
  StoryContainer,
  Tab,
  TabbedView,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';

import { Col, Row } from '../../components/Grid';
import { Validations, Form } from '../../components/Form';

import * as SimpleForm from './SimpleForm';
import * as SimpleValidation from './SimpleValidation';
import * as AdvancedValidation from './AdvancedValidation';

const importForm = `import { Form } from '@catho/quantum';`;

export default {
  title: 'Forms',
};

export const _Form = () => (
  <>
    <Heading name="Forms">
      A Form displays a set of related user input fields in a structured way,
      some other components like validation adds check behavior of the data
      against a set of criteria before passing it along to the server
    </Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing form</Title>
          <SimpleHighlight>{importForm}</SimpleHighlight>

          <Title as="h2">Usage</Title>
          <Row>
            <Col medium={6}>
              <CodeExample
                showTitle={false}
                component={SimpleForm.Form}
                code={SimpleForm.Code}
              />
            </Col>

            <Col medium={6}>
              <SimpleForm.Form />
            </Col>
          </Row>

          <Title as="h2">Validate Example</Title>
          <p>
            Each child of <code>Form</code> has an property{' '}
            <code>validate</code>.
          </p>
          <p>
            It is not required but you can provide validations on it to be fired
            when your form is submitted.
          </p>
          <Row>
            <Col medium={6}>
              <CodeExample
                showTitle={false}
                component={SimpleValidation.Form}
                code={SimpleValidation.Code}
              />
            </Col>

            <Col medium={6}>
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
          <Title as="h2">Custom Validation</Title>
          <p>
            You can write your custom validate function with custom error
            messages.
          </p>
          <Row>
            <Col medium={6}>
              <CodeExample
                showTitle={false}
                component={AdvancedValidation.Form}
                code={AdvancedValidation.Code}
              />
            </Col>

            <Col medium={6}>
              <AdvancedValidation.Form />
            </Col>
          </Row>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <AutoPropsApi title="Form" component={Form} />
      </Tab>
    </TabbedView>
  </>
);
