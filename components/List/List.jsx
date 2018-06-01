import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './sub-component/Item';
import Content from './sub-component/Content';

const bullets = ({ bullet }) =>
  bullet &&
  css`
    list-style: ${bullet || 'initial'};
  `;

const inline = ({ inline }) => css`
  flex-direction: ${inline ? 'row' : 'column'};
  flex-wrap: wrap;
`;

const Unordered = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${inline} ${bullets};
`;

class List extends React.Component {
  static Item = Item;
  static Content = Content;

  constructor(props) {
    super(props);

    this.types = {
      ul: Unordered,
      ol: 'ol',
    };
  }

  _listType = ordered => (ordered ? this.types.ol : this.types.ul);

  render() {
    const { ordered, items, children } = this.props;

    const listItems = children || items.map(Item.create);

    return React.createElement(
      this._listType(ordered),
      { ...this.props },
      listItems,
    );
  }
}

List.defaultProps = {
  items: [],
  ordered: false,
  bullet: false,
  inline: false,
  divided: false,
  children: null,
};

List.propTypes = {
  items: PropTypes.instanceOf(Array),
  ordered: PropTypes.bool,
  inline: PropTypes.bool,
  divided: PropTypes.bool,
  bullet: PropTypes.oneOfType([PropTypes.bool, 'circle', 'square']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default List;
