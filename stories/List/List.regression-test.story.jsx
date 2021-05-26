import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../../components/List';
import {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
} from './objectReference';

storiesOf('List', module)
  .add('Unordered', () => <List items={exampleItemsDefault} />)
  .add('Unordered inline', () => <List items={exampleItemsDefault} inline />)
  .add('Unordered with bullets', () => (
    <List items={exampleItemsDefault} bullet="&bull;" />
  ))
  .add('Unordered with bullets inline', () => (
    <List items={exampleItemsDefault} bullet="&bull;" inline />
  ))
  .add('Unordered with bullets divided', () => (
    <List items={exampleItemsDefault} bullet="&bull;" divided />
  ))
  .add('Unordered with bullets with icons', () => (
    <List items={exampleItemsWithIcon} bullet="&bull;" />
  ))
  .add('Unordered with header and subheader', () => (
    <List items={exampleItemsWithHeaderAndSubHeader} bullet="&bull;" />
  ))
  .add('Ordered', () => <List items={exampleItemsDefault} ordered />)
  .add('Ordered inline', () => (
    <List items={exampleItemsDefault} ordered inline />
  ))
  .add('Ordered with icons', () => (
    <List items={exampleItemsWithIcon} ordered />
  ))
  .add('Ordered with header and subheader', () => (
    <List items={exampleItemsWithHeaderAndSubHeader} ordered />
  ));
