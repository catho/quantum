import Socials from '../../components/Socials';

export default {
  title: 'Socials',
  component: Socials,
};

const allItems = [
  {
    name: 'facebook',
    url: 'https://facebook.com',
    title: 'facebook',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com',
    title: 'twitter',
  },
  {
    name: 'youtube',
    url: 'https://youtube.com',
    title: 'youtube',
  },
];

const Template = args => <Socials items={[allItems[1]]} {...args} />;

export const Default = Template.bind({});

export const WithoutBox = Template.bind({});

WithoutBox.args = {
  withBox: false,
};

export const AllItems = Template.bind({});
AllItems.args = {
  items: allItems,
};

export const WithSize = Template.bind({});
WithSize.args = {
  size: '24',
};
