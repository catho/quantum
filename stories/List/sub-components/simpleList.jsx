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
  <List.Item content="Tomato sauce" />
  <List.Item content="Mustard" />
  <List.Item content="Barbecue sauce" />
  <List.Item content="Red-wine vinegar" />
  <List.Item content="Salsa" />
  <List.Item content="Hot pepper sauce" />
</List>`,
  component: (
    <List items={[
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
