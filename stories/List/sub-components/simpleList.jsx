import React from 'react';
import List from '../../../components/List';

const simpleList = {
  code: `<List items={[
  'Tomato sauce',
  'Mustard',
  'Barbecue sauce',
  'Red-wine vinegar',
  'Salsa',
  'Hot pepper sauce',
]} />

/* or */

<List>
  <List.Item> Tomato sauce </List.Item>
  <List.Item> Mustard </List.Item>
  <List.Item> Barbecue sauce </List.Item>
  <List.Item> Red-wine vinegar </List.Item>
  <List.Item> Salsa </List.Item>
  <List.Item> Hot pepper sauce </List.Item>
</List>`,
  component: (
    <List
      items={[
        'Tomato sauce',
        'Mustard',
        'Barbecue sauce',
        'Red-wine vinegar',
        'Salsa',
        'Hot pepper sauce',
      ]}
    />
  ),
};

export default simpleList;
