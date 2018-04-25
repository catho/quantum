import React from 'react';
import { storiesOf } from '@storybook/react';
// import { Radio, RadioGroup } from '../../components/Radio';
import CodeExample from '../../.storybook/components/CodeExample';
import { Validations, Form } from '../../components/Form';
import Input from '../../components/Input';

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
      minLength={4}
      obj={[
        {
          validate: 'test',
          method1: () => {},
          method2: function () {},
          person: {
            name: 'daniel',
            surname: 'silva',
            person: {
              name: 'daniel',
              surname: 'silva',
            },
          },
        },
        ['a', 'b', () => {}],
      ]}
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
    <Input.Date
      name="date"
      label="Date"
      validate={[
        Validations.MinLength,
        {
          validate: Validations.Date,
          error: 'Plese, insert a valid date (dd/mm/aaaa)',
        },
      ]}
      minLength={8}
    />
    <Form.Submit />
  </Form>
);

// const radio = (
  // <RadioGroup>
  //   <Radio id="radio" value="radio" name="radio" label="Click me!" />
  //   <Radio id="radioTwo" value="radioTwo" name="radio" label="Click me!" />
  //   <div>
  //     <Radio id="radioThree" value="radioThree" name="radio" label="Click me!" />
  //     Eiiiiita
  //     <span
  //       hello="mundo"
  //       ola="mundo"
  //       tchau="mundo"
  //     >
  //       <span
  //         test={{
  //           a: 'a',
  //           b: 'b',
  //         }}
  //         hello="world"
  //         fn={Validations.MaxLength}
  //       >
  //         123
  //       </span>
  //       456
  //     </span>
  //   </div>
  //   <span>Hellow</span>
  // </RadioGroup>
// );

const stories = storiesOf('3. Forms', module);
stories
  .add('Radio Button', () => (
    <CodeExample
      component={FormExample}
      withImport="RadioGroup, Radio"
    />
  ));
