import React from 'react';
import { Title, StoryContainer } from '@catho/quantum-storybook-ui';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

export default (
  <StoryContainer>
    <Title as="h2">Checkbox Group</Title>
    <CheckboxGroup name="group-test" onChange={list => console.log(list)}>
      <CheckboxGroup.Checkbox value="Banana" />
      <CheckboxGroup.Checkbox value="Orange" />
      <CheckboxGroup.Checkbox value="Lemon" />
      <CheckboxGroup.Checkbox value="Strawberry" disabled checked />
      <CheckboxGroup.Checkbox value="Blueberry" />
    </CheckboxGroup>
  </StoryContainer>
);
