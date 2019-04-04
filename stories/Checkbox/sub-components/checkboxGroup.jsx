import React from 'react';
import { Title, StoryContainer } from '@catho/quantum-storybook-ui';
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup';

export default (
  <StoryContainer>
    <Title as="h2">Checkbox Group</Title>

    <CheckboxGroup name="group-test" error="Select one">
      <CheckboxGroup.Checkbox label="Option 1" value="Option 1" />
      <CheckboxGroup.Checkbox label="Option 2" value="Option 2" checked />
      <CheckboxGroup.Checkbox label="Option 3" value="Option 3" />
      <CheckboxGroup.Checkbox
        label="Option 4"
        value="Option 4"
        disabled
        checked
      />
      <CheckboxGroup.Checkbox label="Option 5" value="Option 5" />
      <CheckboxGroup.Checkbox label="Option 6" value="Option 6" />
    </CheckboxGroup>
  </StoryContainer>
);
