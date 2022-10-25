import Socials from '../../components/Socials';

const Template = args => <Socials {...args} />;

const allItems = [
  {
    name: 'facebook',
    url: 'https://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com',
    description: 'twitter description of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'https://youtube.com',
    description: 'youtube description of the purpose of this icon',
  },
];

export const AllItems = Template.bind({});
AllItems.args = {
  items: allItems,
};

export const AllItemsWithoutBox = Template.bind({});

AllItemsWithoutBox.args = {
  ...AllItems.args,
  withBox: false,
};

export const OneItemWithouBox = Template.bind({});
OneItemWithouBox.args = {
  items: [allItems[1]],
  withBox: false,
};

export const AllItems24px = Template.bind({});
AllItems24px.args = {
  ...AllItems.args,
  size: '24',
};
