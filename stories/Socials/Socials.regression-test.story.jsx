import React from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('Socials', module)
  .add('All items', () => (
    <div>
      <Socials items={allItems} />
    </div>
  ))

  .add('all items (24px)', () => (
    <div>
      <Socials items={allItems} size="24" />
    </div>
  ))
  .add('only Facebook', () => (
    <div>
      <Socials items={[allItems[0]]} />
    </div>
  ))
  .add('only Twitter', () => (
    <div>
      <Socials items={[allItems[1]]} />
    </div>
  ))
  .add('only Youtube', () => (
    <div>
      <Socials items={[allItems[2]]} />
    </div>
  ))
  .add('all items without box (24px)', () => (
    <div>
      <Socials items={allItems} withBox={false} size="24" />
    </div>
  ))
  .add('all items without box', () => (
    <div>
      <Socials items={allItems} withBox={false} />
    </div>
  ));
