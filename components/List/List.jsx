import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './sub-components/Item';
import Content from './sub-components/Content';
import Header from './sub-components/Header';
import SubHeader from './sub-components/SubHeader';

import Colors from '../Colors';

const bullets = ({ bullet }) =>
  (bullet
    ? css`
        list-style: ${bullet || 'initial'};
      `
    : 'padding: 0;');

const inlineList = ({ inline }) => css`
  flex-direction: ${inline ? 'row' : 'column'};
  flex-wrap: wrap;
`;

const dividedList = ({ divided, inline }) =>
  divided &&
  css`
  li {
    ${inline ? 'border-right' : 'border-bottom'}: 1px solid ${Colors.GREY['50']};

    &:last-child {
      border: none;
    }
  }
`;

const Unordered = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  ${inlineList} ${bullets} ${dividedList}
`;

Unordered.displayName = 'UnorderedList';

const Ordered = styled.ol`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  counter-reset: count;

  li {
    margin-left: 24px;
    position: relative;

    &:before {
      content: counter(count) '.';
      counter-increment: count;
      position: absolute;

      right: 100%;

      margin-top: 8px;
      margin-right: 8px;
    }
  }

  ${inlineList} ${dividedList};
`;

Ordered.displayName = 'OrderedList';

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
    const {
      ordered, items, children, inline, divided, bullet,
    } = this.props;

    const listItems = children || items.map(Item.create);

    return React.createElement(
      this._listType(ordered),
      {
        inline,
        divided,
        bullet,
        ...this.props,
      },
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
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          header: PropTypes.string,
          subheader: PropTypes.string,
        }),
      ]),
    })),
  ]),
  ordered: PropTypes.bool,
  inline: PropTypes.bool,
  divided: PropTypes.bool,
  bullet: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['circle', 'square']),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default List;
