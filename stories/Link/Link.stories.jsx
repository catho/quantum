import { Link } from '../../components';

const Template = args => (
  <Link href="_blank" rel="noreferrer" {...args}>
    Some link
  </Link>
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  skin: 'dark',
};
