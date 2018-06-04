import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../../components/List';

const options = [
  { icon: 'thumb_up', content: { header: 'Tomato sauce', subheader: 'Tomato sauce subheader' } },
  { icon: 'info', content: { header: 'Mustard', subheader: 'Mustard subheader' } },
  { icon: 'motorcycle', content: { header: 'Barbecue sauce', subheader: 'Barbecue sauce subheader' } },
  { icon: 'directions_car', content: { header: 'Red-wine vinegar', subheader: 'Red-wine vinegar subheader' } },
  { icon: 'airplanemode_active', content: { header: 'Salsa', subheader: 'Salsa subheader' } },
  { icon: 'access_alarm', content: { header: 'Extra virgin olive oil, canola oil, nonfat cooking spray', subheader: 'Extra virgin olive oil, canola oil, nonfat cooking spray subheader' } },
  { icon: 'autorenew', content: { header: 'Jarred capers and olives', subheader: 'Jarred capers and olives subheader' } },
  { icon: 'directions_bike', content: { header: 'Hot pepper sauce', subheader: 'Hot pepper sauce subheader' } },
];

storiesOf('List', module).add('List', () => (
  <React.Fragment>
    <List>
      { options.map(({ icon, content: { header, subheader } }) => (

        <List.Item icon={icon}>
          <List.Content>
            <List.Header>{header}</List.Header>
            <List.SubHeader>{subheader}</List.SubHeader>
          </List.Content>
        </List.Item>
    )) }
    </List>


  </React.Fragment>
));
