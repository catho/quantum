import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tab, Example, AutoExample } from '@catho-private/quantum-storybook-ui';
import Checkbox from '../../components/Checkbox';
import FieldGroup from '../../components/shared/FieldGroup';

const exampleTab = (
  <Tab title="Example">
    <Example
      component={
        <>
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
        </>
      }
      code={`<Checkbox label="Default" checked={false} onChange={() => {}} />
<Checkbox label="Checked" checked onChange={() => {}} />
<Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
<Checkbox label="Disabled & Checked" disabled checked onChange={() => {}} />
<Checkbox label="With error" error="Message" checked={false} onChange={() => {}} />
<Checkbox label="With error & Checked" error="Message" checked onChange={() => {}} />`}
    />
  </Tab>
);

storiesOf('3. Forms', module).add('Checkbox', () => (
  <AutoExample component={Checkbox} additionalTabs={exampleTab} />
));
