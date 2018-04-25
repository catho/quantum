import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio, RadioGroup } from '../../components/Radio';
import CodeExample from '../../.storybook/components/CodeExample';
import { Validations } from '../../components/Form';

const radio = (
  <RadioGroup>
    <Radio id="radio" value="radio" name="radio" label="Click me!" />
    <Radio id="radioTwo" value="radioTwo" name="radio" label="Click me!" />
    <div>
      <Radio id="radioThree" value="radioThree" name="radio" label="Click me!" />
      Eiiiiita
      <span
        hello="mundo"
        ola="mundo"
        tchau="mundo"
      >
        <span
          test={{
            a: 'a',
            b: 'b',
          }}
          hello="world"
          fn={Validations.MaxLength}
        >
          123
        </span>
        456
      </span>
    </div>
    <span>Hellow</span>
  </RadioGroup>
);

const stories = storiesOf('3. Forms', module);
stories
  .add('Radio Button', () => (
    <CodeExample
      component={radio}
      withImport="RadioGroup, Radio"
    />
  ));
