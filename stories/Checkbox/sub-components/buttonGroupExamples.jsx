import React from 'react';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

export default (
  <CheckboxGroup>
    <CheckboxGroup.Button checked label="Banana" name="banana" />
    <CheckboxGroup.Button label="Orange" name="orange" />
    <CheckboxGroup.Button label="Lemon" name="lemon" />
  </CheckboxGroup>
);
