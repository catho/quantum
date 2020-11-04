import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import slugify from 'slugify';

import {
  colors,
  spacing as defaultSpacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import Icon from '../Icon';

const Wrapper = styled.ul`
  ${({
    theme: {
      spacing: { medium },
      baseFontSize,
      colors: {
        neutral: { 900: color },
      },
    },
  }) => `
    font-size: ${baseFontSize}px;
    padding: 0 ${medium}px;
    color: ${color};
  `}
  list-style-type: none;
  background-color: inherit;
`;

const AccordionItem = styled.li`
  border-bottom: 1px solid
    ${({ opened, color }) => (opened ? 'transparent' : color)};

  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const AccordionTitle = styled.span`
  ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize}px;
  `}
  font-weight: bold;
  line-height: inherit;
`;

const AccordionHeader = styled.button.attrs({ type: 'button' })`
  ${({ spacing: { large, medium } }) => `
    line-height: ${large}px;
    height: ${large}px;
    padding: ${medium}px 0;
  `}
  cursor: pointer;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  background: inherit;
  border: none;
  box-sizing: content-box;

  ${({ as }) => (as === 'button' ? `cursor: pointer;` : null)}
`;

const AccordionContent = styled.div`
  ${({
    theme: {
      spacing: { xsmall },
      baseFontSize,
    },
    opened,
  }) => `
    height: ${opened ? 'auto' : '0'};
    transform: scaleY(${opened ? '1' : '0'});
    transform-origin: top;
    overflow: hidden;
    transition: transform 0.2s ease;
    font-size: ${baseFontSize - 2}px;

    a {
      color: inherit;
      text-decoration: none;
      font-size: ${baseFontSize - 2}px;
    }

    ul {
      list-style-type: none;
      padding: 0;

      & > li {
        padding: ${xsmall}px 0;
      }
    }

    p {
      margin: 0;
    }
  `}
`;

const StyledIcon = styled(Icon)`
  ${({ theme: { baseFontSize } }) => `
    font-size: ${baseFontSize * 1.5}px;
  `}
  line-height: inherit;
`;

AccordionItem.displayName = 'AccordionItem';
AccordionHeader.displayName = 'AccordionHeader';
AccordionContent.displayName = 'AccordionContent';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  setAccordionItems(items) {
    this.setState({ items });
  }

  toggleItem = indexToChange => {
    const { items } = this.state;
    const { keepOnlyOneOpen } = this.props;
    let newItems = items;

    if (keepOnlyOneOpen) {
      newItems = this.closeAllContents();
    }

    newItems = this.toggleItemVisibility(newItems, indexToChange);

    this.setAccordionItems(newItems);
  };

  handleCustomItem = items =>
    items.map((item, index) => {
      const customItem = item;
      customItem.onItemClick = i => {
        if (typeof item.onClick === 'function') {
          item.onClick();
        }
        this.toggleItem(i);
      };
      customItem.opened = !!item.opened;

      return this.renderItem(customItem, index);
    });

  closeAllContents() {
    const { items } = this.state;
    return items.map(item => ({ ...item, opened: false }));
  }

  toggleItemVisibility(newItems, indexToChange) {
    const { items } = this.state;
    const itemsToReturn = newItems;
    itemsToReturn[indexToChange].opened = !items[indexToChange].opened;

    return itemsToReturn;
  }

  renderItem(item, itemIndex) {
    const { title, content, opened, onItemClick } = item;
    const { theme } = this.props;
    const {
      colors: {
        neutral: { 900: color },
      },
      spacing,
    } = theme;
    const itemId = `${slugify(title)}-${itemIndex}`;
    const contentId = `${itemId}-content`;
    const headerId = `${itemId}-header`;

    return (
      <AccordionItem key={title} opened={opened} color={color}>
        <AccordionHeader
          spacing={spacing}
          onClick={() => onItemClick(itemIndex)}
          aria-controls={contentId}
          id={headerId}
        >
          <AccordionTitle theme={theme}>{title}</AccordionTitle>
          <StyledIcon
            theme={theme}
            name={opened ? 'expand_less' : 'expand_more'}
          />
        </AccordionHeader>
        {content && (
          <AccordionContent
            id={contentId}
            aria-labelledby={headerId}
            opened={opened}
            aria-hidden={!opened}
            theme={theme}
          >
            {content}
          </AccordionContent>
        )}
      </AccordionItem>
    );
  }

  render() {
    const { theme } = this.props;
    const { items } = this.state;

    return <Wrapper theme={theme}>{this.handleCustomItem(items)}</Wrapper>;
  }
}

Accordion.defaultProps = {
  theme: {
    colors,
    spacing: defaultSpacing,
    baseFontSize: defaultBaseFontSize,
  },
  keepOnlyOneOpen: false,
};

Accordion.propTypes = {
  /** Edit only for themification */
  theme: PropTypes.objectOf({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  /** Set true to keep only one item open and close the remainings on click */
  keepOnlyOneOpen: PropTypes.bool,
  /** Items to render in accordion */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
      opened: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  ).isRequired,
};

export default Accordion;
