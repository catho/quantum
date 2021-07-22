import React from 'react';
import { Tag } from '../../components';

export default {
  title: 'Tag',
  component: Tag,
};

const Template = args => (
  <>
    <Tag {...args}>Neutral (Default)</Tag>
    <Tag skin="primary" {...args}>
      Primary
    </Tag>
    <Tag skin="success" {...args}>
      Success
    </Tag>
    <Tag skin="warning" {...args}>
      Warning
    </Tag>
    <Tag skin="error" {...args}>
      Error
    </Tag>
  </>
);

export const Skin = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Stroked = Template.bind({});
Stroked.args = {
  stroked: true,
};

export const Closable = Template.bind({});
Closable.args = {
  onClose: () => {},
};

export const Sizes = () => (
  <>
    <Tag size="small">Small</Tag>
    <Tag>Medium (Default)</Tag>
    <Tag size="large">Large</Tag>
  </>
);
