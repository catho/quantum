import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  Title,
  SimpleHighlight,
  AutoExample,
  StoryContainer,
} from '@catho/quantum-storybook-ui';
import Checkbox from '../../components/Checkbox';
import FieldGroup from '../../components/shared/FieldGroup';

const exampleUsage = `<Checkbox label="Default" checked={false} onChange={() => {}} />
<Checkbox label="Checked" checked onChange={() => {}} />
<Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
<Checkbox label="Disabled & Checked" disabled checked onChange={() => {}} />
<Checkbox label="With error" error="Message" checked={false} onChange={() => {}} />
<Checkbox label="With error & Checked" error="Message" checked onChange={() => {}} />`;

const exampleTab = (
  <Tab title="Example">
    <StoryContainer>
      <Title as="h2">Examples</Title>
      <FieldGroup>
        <Checkbox label="Default" checked={false} onChange={() => {}} />
      </FieldGroup>
      <FieldGroup>
        <Checkbox label="Checked" checked onChange={() => {}} />
      </FieldGroup>
      <FieldGroup>
        <Checkbox
          label="Disabled"
          disabled
          checked={false}
          onChange={() => {}}
        />
      </FieldGroup>
      <FieldGroup>
        <Checkbox
          label="Disabled & Checked"
          disabled
          checked
          onChange={() => {}}
        />
      </FieldGroup>
      <FieldGroup>
        <Checkbox
          label="With error"
          error="Message"
          checked={false}
          onChange={() => {}}
        />
      </FieldGroup>
      <FieldGroup>
        <Checkbox
          label="With error & Checked"
          error="Message"
          checked
          onChange={() => {}}
        />
      </FieldGroup>
      <Title as="h2">Usage</Title>
      <SimpleHighlight>{exampleUsage}</SimpleHighlight>
    </StoryContainer>
  </Tab>
);

const description = `Checkboxes are used when there is a list of options and
the user may select multiple options, including all or none.`;

storiesOf('Forms', module).add('Checkbox', () => (
  <>
    <AutoExample
      description={description}
      component={Checkbox}
      additionalTabs={exampleTab}
    />
  </>
));
