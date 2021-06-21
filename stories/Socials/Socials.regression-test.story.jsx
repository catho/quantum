import React from 'react';

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

export default {
  title: 'Socials',
};

export const AllItems = () => (
  <div>
    <Socials items={allItems} />
  </div>
);

AllItems.story = {
  name: 'All items',
};

export const AllItems24Px = () => (
  <div>
    <Socials items={allItems} size="24" />
  </div>
);

AllItems24Px.story = {
  name: 'all items (24px)',
};

export const OnlyFacebook = () => (
  <div>
    <Socials items={[allItems[0]]} />
  </div>
);

OnlyFacebook.story = {
  name: 'only Facebook',
};

export const OnlyTwitter = () => (
  <div>
    <Socials items={[allItems[1]]} />
  </div>
);

OnlyTwitter.story = {
  name: 'only Twitter',
};

export const OnlyYoutube = () => (
  <div>
    <Socials items={[allItems[2]]} />
  </div>
);

OnlyYoutube.story = {
  name: 'only Youtube',
};

export const AllItemsWithoutBox24Px = () => (
  <div>
    <Socials items={allItems} withBox={false} size="24" />
  </div>
);

AllItemsWithoutBox24Px.story = {
  name: 'all items without box (24px)',
};

export const AllItemsWithoutBox = () => (
  <div>
    <Socials items={allItems} withBox={false} />
  </div>
);

AllItemsWithoutBox.story = {
  name: 'all items without box',
};
