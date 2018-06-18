import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Icon from '../../Icon';
import Content from './Content';

const ItemIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

ItemIcon.displayName = 'ItemIcon';

const bulletValue = ({ bullet }) =>
  bullet &&
  css`
    &:before {
      content: '${bullet}';
    }
  `;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 16px;

  ${bulletValue};
`;

ListItem.displayName = 'ListItem';

class Item extends React.Component {
  static create = (item) => {
    if (typeof item === 'string') {
      return <Item content={item} key={item} />;
    }

    return <Item {...item} key={item.content} />;
  };

  _renderIcon = (icon) => {
    if (typeof icon === 'string') {
      return <ItemIcon name={icon} />;
    }

    return <ItemIcon {...icon} />;
  }

  render() {
    const {
      icon,
      children,
      content,
      bullet,
      ...rest
    } = this.props;

    return (
      <li {...rest}>
        <ListItem bullet={bullet} >
          {icon && this._renderIcon(icon)}
          {children || <Content content={content} />}
        </ListItem>
      </li>
    );
  }
}

Item.defaultProps = {
  icon: '',
  bullet: '',
  children: null,
  content: null,
};

Item.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      header: PropTypes.string,
      subheader: PropTypes.string,
    }),
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]),
  bullet: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Item.displayName = 'List.Item';

export default Item;
