import React from 'react';
import List from '../../../components/List';

const simpleListContent = {
  code: `<List>
  <List.Item icon="backup">
    <List.Content content="Backup" />
  </List.Item>
  <List.Item icon="delete">
    <List.Content>Trash</List.Content>
  </List.Item>
  <List.Item icon="notifications">
    <List.Content header="Notifications" />
  </List.Item>
  <List.Item icon="storage">
    <List.Content>
      <List.Header>Upgrade storage</List.Header>
      <List.SubHeader>6.7 of 15.0 GB used</List.SubHeader>
    </List.Content>
  </List.Item>
</List>`,
  component: (
    <List>
      <List.Item icon="backup">
        <List.Content content="Backup" />
      </List.Item>
      <List.Item icon="delete">
        <List.Content>Trash</List.Content>
      </List.Item>
      <List.Item icon="notifications">
        <List.Content header="Notifications" />
      </List.Item>
      <List.Item icon="storage">
        <List.Content>
          <List.Header>Upgrade storage</List.Header>
          <List.SubHeader>6.7 of 15.0 GB used</List.SubHeader>
        </List.Content>
      </List.Item>
    </List>
  ),
};

export default simpleListContent;
