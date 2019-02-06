import React from 'react';
import Colors from '../../../components/Colors/deprecated';
import List from '../../../components/List';

const simpleListItemAlternatives = {
  code: `<List>
  <List.Item> Settings </List.Item>
  <List.Item content="Your places" />
  <List.Item
    icon="timeline"
    content="Your timeline"
  />
  <List.Item
    icon="layers"
    content={{
      header: "Satellite & traffic",
      subheader: "Layers have moved",
    }}
  />
  <List.Item
    icon={{
      name: 'navigation',
      skin: Colors.DANGER['500']
    }}
    content="Your timeline" />
</List>`,
  component: (
    <List>
      <List.Item> Settings </List.Item>
      <List.Item content="Your places" />
      <List.Item icon="timeline" content="Your timeline" />
      <List.Item
        icon="layers"
        content={{
          header: 'Satellite & traffic',
          subheader: 'Layers have moved',
        }}
      />
      <List.Item
        icon={{ name: 'navigation', skin: Colors.DANGER['500'] }}
        content="Your timeline"
      />
    </List>
  ),
};

export default simpleListItemAlternatives;
