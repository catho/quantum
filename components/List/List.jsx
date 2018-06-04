import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './sub-component/Item';
import Content from './sub-component/Content';
import Header from './sub-component/Header';
import SubHeader from './sub-component/SubHeader';

import Colors from '../Colors';

const bullets = ({ bullet }) =>
  (bullet ?
    css`
      list-style: ${bullet || 'initial'};
    ` :
    'padding: 0;');

const inlineList = ({ inline }) => css`
  flex-direction: ${inline ? 'row' : 'column'};
  flex-wrap: wrap;
`;

const dividedList = ({ divided, inline }) => divided && css`
  li {
    border-${inline ? 'right' : 'bottom'}: 1px solid ${Colors.GREY['100']};

    &:last-child {
      border: none;
    }
  }
`;

const Unordered = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;

  ${inlineList} ${bullets} ${dividedList}
`;

const Ordered = styled.ol`
  display: flex;
  margin: 0;
  counter-reset: count;

  li {
    margin-left: 24px;
    position: relative;

    &:before {
      content: counter(count) '.';
      counter-increment: count;
      position: absolute;

      right: 100%;
      margin-right: 8px;
    }
  }

  ${inlineList} ${dividedList}
`;

class List extends React.Component {
  static Item = Item;
  static Content = Content;
  static Header = Header;
  static SubHeader = SubHeader;

  constructor(props) {
    super(props);

    this.types = {
      ul: Unordered,
      ol: Ordered,
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
