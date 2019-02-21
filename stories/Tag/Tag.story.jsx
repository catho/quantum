import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Tab,
  Example,
  AutoExample,
  Title,
} from '@catho-private/quantum-storybook-ui';
import { Tag } from '../../components';

const skinsCode = `<Tag>Default</Tag>
<Tag skin="stroked">Stroked</Tag>
<Tag skin="inverted">Inverted</Tag>
<Tag skin="blue">Blue</Tag>
<Tag skin="success">Success</Tag>
<Tag skin="warning">Warning</Tag>
<Tag skin="error">Error</Tag>
<Tag skin="blue-text">Blue Text</Tag>`;

const skinsExample = (
  <>
    <Title>Skins</Title>
    <Example
      component={
        <>
          <Tag>Default</Tag>
          <Tag skin="stroked">Stroked</Tag>
          <Tag skin="inverted">Inverted</Tag>
          <Tag skin="blue">Blue</Tag>
          <Tag skin="success">Success</Tag>
          <Tag skin="warning">Warning</Tag>
          <Tag skin="error">Error</Tag>
          <Tag skin="blue-text">Blue Text</Tag>
        </>
      }
      code={skinsCode}
    />
  </>
);

const closableCodes = `<Tag onClose={() => {}}>Default</Tag>
<Tag onClose={() => {}} skin="stroked">Stroked</Tag>
<Tag onClose={() => {}} skin="inverted">Inverted</Tag>
<Tag onClose={() => {}} skin="blue">Blue</Tag>
<Tag onClose={() => {}} skin="success">Success</Tag>
<Tag onClose={() => {}} skin="warning">Warning</Tag>
<Tag onClose={() => {}} skin="error">Error</Tag>
<Tag onClose={() => {}} skin="blue-text">Blue Text</Tag>`;

const closableExample = (
  <>
    <Title>Closables</Title>
    <Example
      component={
        <>
          <Tag onClose={() => {}}>Default</Tag>
          <Tag onClose={() => {}} skin="stroked">
            Stroked
          </Tag>
          <Tag onClose={() => {}} skin="inverted">
            Inverted
          </Tag>
          <Tag onClose={() => {}} skin="blue">
            Blue
          </Tag>
          <Tag onClose={() => {}} skin="success">
            Success
          </Tag>
          <Tag onClose={() => {}} skin="warning">
            Warning
          </Tag>
          <Tag onClose={() => {}} skin="error">
            Error
          </Tag>
          <Tag onClose={() => {}} skin="blue-text">
            Blue Text
          </Tag>
        </>
      }
      code={closableCodes}
    />
  </>
);

const sizesCode = `<Tag skin="small">Small</Tag>
<Tag>Medium (Default)</Tag>
<Tag skin="large">Large</Tag>`;

const sizesExample = (
  <>
    <Title>Sizes</Title>
    <Example
      component={
        <>
          <Tag size="small">Small</Tag>
          <Tag>Medium (Default)</Tag>
          <Tag size="large">Large</Tag>
        </>
      }
      code={sizesCode}
    />
  </>
);

const exampleTab = (
  <Tab title="Examples">
    {skinsExample}
    {closableExample}
    {sizesExample}
  </Tab>
);

storiesOf('16. Tag', module).add('Tag', () => (
  <AutoExample component={Tag} additionalTabs={exampleTab} />
));
