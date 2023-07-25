import Proptypes from 'prop-types';
import styled from 'styled-components';
import SocialType from './sub-components/SocialType';
import { spacing } from '../shared/theme';

const List = styled.ul`
  padding: 0;
  display: inline-flex;
`;

const ListItem = styled.li`
  display: inline-flex;
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

const SocialWrapper = styled.section`
  display: inline-flex;
`;

ListItem.displayName = 'ListItem';

const Socials = ({ items, size, theme, withBox }) => (
  <SocialWrapper>
    <List>
      {items.map((item) => (
        <ListItem theme={theme} key={`social-item-${item.name}`}>
          <SocialType
            key={`social-${item.name}`}
            url={item.url}
            type={item.name}
            size={size}
            title={item.title}
            withBox={withBox}
          />
        </ListItem>
      ))}
    </List>
  </SocialWrapper>
);

Socials.defaultProps = {
  size: '48',
  theme: { spacing },
  withBox: true,
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
      title: Proptypes.string,
    }).isRequired,
  ).isRequired,
  withBox: Proptypes.bool,
};

export default Socials;
