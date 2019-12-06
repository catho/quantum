import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import SocialType from './sub-components/SocialType';
import { spacing } from '../shared/theme';

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  list-style: none;
  ${({
    theme: {
      spacing: { medium },
    },
  }) => `margin-right: ${medium}px;`}

  &:last-child {
    margin-right: 0;
  }
`;

ListItem.displayName = 'ListItem';

const Socials = ({ items, size, theme }) => (
  <section>
    <List>
      {items.map(item => (
        <ListItem theme={theme} key={`social-item-${item.name}`}>
          <SocialType
            key={`social-${item.name}`}
            url={item.url}
            type={item.name}
            size={size}
            description={item.description}
          />
        </ListItem>
      ))}
    </List>
  </section>
);

Socials.defaultProps = {
  size: '48',
  theme: { spacing },
};

Socials.propTypes = {
  size: Proptypes.string,
  theme: Proptypes.shape({
    spacing: Proptypes.object,
  }),
  items: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.oneOf(['facebook', 'twitter', 'youtube']),
      url: Proptypes.string,
      description: Proptypes.string,
    }).isRequired,
  ).isRequired,
};

export default Socials;
