import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../../components/List';

const items = [
  { content: 'Lorem ipsum dolor sit amet' },
  { content: 'Sed do eiusmod tempor ' },
  { content: 'Consectetur adipiscing elit' },
];

const itemsWithHeaderAndSubHeader = [
  { header: 'Lorem ipsum ', subheader: 'dolor sit amet' },
  { header: 'Sed', subheader: 'do eiusmod tempor ' },
  { header: 'Consectetur', subheader: 'adipiscing elit' },
];

storiesOf('List', module)
  .add('default', () => <List items={items} />)
  .add('default inline', () => <List items={items} inline />)
  .add('default with bullets', () => <List items={items} bullet="&bull;" />)
  .add('default with bullets inline', () => (
    <List items={items} bullet="&bull;" inline />
  ))
  .add('ordered', () => <List items={items} ordered />)
  .add('ordered inline', () => <List items={items} ordered inline />)
  .add('default with bullets divided', () => (
    <List items={items} bullet="&bull;" divided />
  ))
  .add('default with header and subheader', () => (
    <List items={itemsWithHeaderAndSubHeader} bullet="&bull;" />
  ))
  .add('ordered with header and subheader', () => (
    <List items={itemsWithHeaderAndSubHeader} bullet="&bull;" ordered />
  ));
// .add('with skin (color)', () => (
//   <Icon name="info" skin={colors.error['300']} />
// ))
// .add('with large size', () => <Icon name="info" size="large" />)
// .add('with small size', () => <Icon name="info" size="small" />)
