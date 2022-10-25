import Socials from '../../components/Socials';

const Template = args => <Socials {...args} />;

const allItems = [
  {
    name: 'facebook',
    url: 'http://facebook.com',
    description: 'facebook description of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'http://twitter.com',
    description: 'twitter description of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'http://youtube.com',
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
