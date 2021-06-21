import React from 'react';
import List from '../../components/List';
import {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
} from './objectReference';

export default {
  title: 'List',
};

export const Unordered = () => <List items={exampleItemsDefault} />;

Unordered.story = {
  name: 'Unordered',
};

export const UnorderedInline = () => (
  <List items={exampleItemsDefault} inline />
);

UnorderedInline.story = {
  name: 'Unordered inline',
};

export const UnorderedWithBullets = () => (
  <List items={exampleItemsDefault} bullet="&bull;" />
);

UnorderedWithBullets.story = {
  name: 'Unordered with bullets',
};

export const UnorderedWithBulletsInline = () => (
  <List items={exampleItemsDefault} bullet="&bull;" inline />
);

UnorderedWithBulletsInline.story = {
  name: 'Unordered with bullets inline',
};

export const UnorderedWithBulletsDivided = () => (
  <List items={exampleItemsDefault} bullet="&bull;" divided />
);

UnorderedWithBulletsDivided.story = {
  name: 'Unordered with bullets divided',
};

export const UnorderedWithBulletsAndIcons = () => (
  <List items={exampleItemsWithIcon} bullet="&bull;" />
);

UnorderedWithBulletsAndIcons.story = {
  name: 'Unordered with bullets and icons',
};

export const UnorderedWithHeaderAndSubheader = () => (
  <List items={exampleItemsWithHeaderAndSubHeader} bullet="&bull;" />
);

UnorderedWithHeaderAndSubheader.story = {
  name: 'Unordered with header and subheader',
};

export const Ordered = () => <List items={exampleItemsDefault} ordered />;

Ordered.story = {
  name: 'Ordered',
};

export const OrderedInline = () => (
  <List items={exampleItemsDefault} ordered inline />
);

Ordered.story = {
  name: 'Ordered',
};

export const OrderedWithIcons = () => (
  <List items={exampleItemsWithIcon} ordered />
);

OrderedWithIcons.story = {
  name: 'Ordered with icons',
};

export const OrderedWithHeaderAndSubheader = () => (
  <List items={exampleItemsWithHeaderAndSubHeader} ordered />
);

OrderedWithHeaderAndSubheader.story = {
  name: 'Ordered with header and subheader',
};
