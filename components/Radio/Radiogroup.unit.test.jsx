import React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from './RadioGroup';
import Radio from './Radio';

const GROUPS = {
  defaultRadioGroup: (
    <RadioGroup>
      <Radio id="op1" name="op1" value="1" label="Hello 1" />
      <Radio id="op2" name="op2" value="2" label="Hello 2" />
    </RadioGroup>
  ),

  boxedRadioGroup: (
    <RadioGroup boxed>
      <Radio id="op1" name="op1" value="1" label="Hello 1" />
      <Radio id="op2" name="op2" value="2" label="Hello 2" />
    </RadioGroup>
  ),

  inlineRadioGroup: (
    <RadioGroup inline>
      <Radio id="op1" name="op1" value="1" label="Hello 1" />
      <Radio id="op2" name="op2" value="2" label="Hello 2" />
    </RadioGroup>
  ),
};

describe('Radio Group component', () => {
  it('Should match the snapshot', () => {
    Object.values(GROUPS).forEach(group => {
      expect(shallow(group)).toMatchSnapshot();
    });
  });
});
