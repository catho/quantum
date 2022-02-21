import Socials from '../../components/Socials';

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

const decorator = Story => (
  <div>
    <Story />
  </div>
);

export default {
  title: 'Socials',
  component: Socials,
  decorators: [decorator],
};

const Template = args => <Socials {...args} />;

export const AllItems = Template.bind({});
AllItems.args = {
  items: allItems,
};

export const AllItems24px = Template.bind({});
AllItems24px.args = {
  ...AllItems.args,
  size: '24',
};

export const Facebook = Template.bind({});
Facebook.args = {
  items: [allItems[0]],
};

export const Twitter = Template.bind({});
Twitter.args = {
  items: [allItems[1]],
};

export const Youtube = Template.bind({});
Youtube.args = {
  items: [allItems[2]],
};

export const AllItemsWithoutBox24Px = Template.bind({});
AllItemsWithoutBox24Px.args = {
  ...AllItems24px.args,
  withBox: false,
};

export const AllItemsWithoutBox = Template.bind({});

AllItemsWithoutBox.args = {
  ...AllItems.args,
  withBox: false,
};
