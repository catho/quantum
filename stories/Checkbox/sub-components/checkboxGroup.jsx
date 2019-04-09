import React from 'react';
import { Title, StoryContainer } from '@catho/quantum-storybook-ui';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

export default (
  <StoryContainer>
    <Title as="h2">Checkbox Group</Title>
    <CheckboxGroup onChange={list => console.log(list)}>
      <CheckboxGroup.Checkbox label="Banana" name="Banana" />
      <CheckboxGroup.Checkbox label="Orange" name="Orange" />
      <CheckboxGroup.Checkbox label="Lemon" name="Lemon" />
      <CheckboxGroup.Checkbox
        label="Strawberry"
        name="Strawberry"
        disabled
        checked
      />
      <CheckboxGroup.Checkbox label="Blueberry" name="Blueberry" />
    </CheckboxGroup>
  </StoryContainer>
);
