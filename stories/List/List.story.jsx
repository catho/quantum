import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import List from '../../components/List';

storiesOf('List', module).add('List', () => (
  <React.Fragment>
    <List>
      <List.Item icon="face">
        <List.Content
          header="rostinho"
          subheader="Um rostinho lindo de se ver"
        />
      </List.Item>
      <List.Item icon="add" content="adicionar" />
      <List.Item icon="face" content="rostinho" />
      <List.Item icon="face" content="rostinho" />
    </List>

    <hr />
    <List inline divided>
      <List.Item icon="face">
        <List.Content
          header="rostinho"
          subheader="Um rostinho lindo de se ver"
        />
      </List.Item>
      <List.Item icon="add" content="adicionar" />
      <List.Item icon="face" content="rostinho" />
      <List.Item icon="face" content="rostinho" />
    </List>
  </React.Fragment>
));
