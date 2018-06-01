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

const bulletValue = ({ bullet }) =>
  bullet &&
  css`
    &:before {
      content: '${bullet}';
    }
  `;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 4px;

  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }

  ${bulletValue};
`;

class Item extends React.Component {
  static create = item => {
    if (typeof item === 'string') {
      return <Item content={item} />;
    }

    const { icon, content } = item;

    return <Item icon={icon} content={content} />;
  };

  _renderContent = content => {
    if (typeof content === 'string') {
      return <Content header={content} />;
    }

    return <Content {...content} />;
  };

  render() {
    const { icon, children, content, bullet } = this.props;

    return (
      <ListItem bullet={bullet}>
        {icon && <ItemIcon name={icon} />}
        {children ? children : this._renderContent(content)}
      </ListItem>
    );
  }
}

Item.defaultProps = {
  icon: '',
  bullet: '',
};

Item.propTypes = {
  content: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.shape({
      subheader: PropTypes.string.isRequired,
      header: PropTypes.string,
    }),
  ).isRequired,
  icon: PropTypes.string,
  bullet: PropTypes.string,
};

export default Item;
