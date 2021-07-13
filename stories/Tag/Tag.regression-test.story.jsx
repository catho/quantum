import React from 'react';
import { Tag } from '../../components';

export default {
  title: 'Tag',
};

export const Skin = () => (
  <>
    <Tag>Neutral (Default)</Tag>
    <Tag skin="primary">Primary</Tag>
    <Tag skin="success">Success</Tag>
    <Tag skin="warning">Warning</Tag>
    <Tag skin="error">Error</Tag>
  </>
);

Skin.story = {
  name: 'skin',
};

export const Inverted = () => (
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
);

Inverted.story = {
  name: 'inverted',
};

export const Stroked = () => (
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
);

Stroked.story = {
  name: 'stroked',
};

export const Closables = () => (
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
);

Closables.story = {
  name: 'closables',
};

export const Sizes = () => (
  <>
    <Tag size="small">Small</Tag>
    <Tag>Medium (Default)</Tag>
    <Tag size="large">Large</Tag>
  </>
);

Sizes.story = {
  name: 'sizes',
};
