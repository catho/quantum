import { Link } from '../../components';

export default {
  title: 'Foundation/Link',
  component: Link,
};

const Template = (args) => (
  <Link href="_blank" rel="noreferrer" {...args}>
    Some link
  </Link>
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  skin: 'dark',
};
