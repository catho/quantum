import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tag } from '../../components';

storiesOf('Tag', module)
  .add('skin', () => (
    <>
      <Tag>Neutral (Default)</Tag>
      <Tag skin="primary">Primary</Tag>
      <Tag skin="success">Success</Tag>
      <Tag skin="warning">Warning</Tag>
      <Tag skin="error">Error</Tag>
    </>
  ))
  .add('inverted', () => (
    <>
      <Tag inverted>Neutral (Default)</Tag>
      <Tag inverted skin="primary">
        Primary
      </Tag>
      <Tag inverted skin="success">
        Success
      </Tag>
      <Tag inverted skin="warning">
        Warning
      </Tag>
      <Tag inverted skin="error">
        Error
      </Tag>
    </>
  ))
  .add('stroked', () => (
    <>
      <Tag stroked>Neutral (Default)</Tag>
      <Tag stroked skin="primary">
        Primary
      </Tag>
      <Tag stroked skin="success">
        Success
      </Tag>
      <Tag stroked skin="warning">
        Warning
      </Tag>
      <Tag stroked skin="error">
        Error
      </Tag>
    </>
  ))
  .add('closables', () => (
    <>
      <Tag onClose={() => {}}>Neutral (Default)</Tag>
      <Tag onClose={() => {}} skin="primary">
        Primary
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
    </>
  ))
  .add('sizes', () => (
    <>
      <Tag size="small">Small</Tag>
      <Tag>Medium (Default)</Tag>
      <Tag size="large">Large</Tag>
    </>
  ));
