import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import slugify from 'slugify';

import {
  colors,
  spacing as defaultSpacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import { shadow } from '../shared';
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
    color: ${color};
    font-size: ${baseFontSize}px;
    padding: 0 ${medium}px;
  `}
  background-color: inherit;
  list-style-type: none;
`;

const AccordionTitle = styled.span`
  ${({
    theme: {
      baseFontSize,
      spacing: { medium },
      colors: { neutral },
    },
  }) => `
    color: ${neutral[700]};
    font-size: ${baseFontSize}px;
    margin-left: ${medium}px;
  `}

  font-weight: bold;
  line-height: inherit;
`;

const AccordionHeader = styled.button.attrs({ type: 'button' })`
  ${({ spacing: { large, medium } }) => `
    height: ${large}px;
    line-height: ${large}px;
    padding: ${medium}px 0;
  `}
  background: inherit;
  border-radius: 4px;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;

  ${shadow(1)}

  ${({ as }) => (as === 'button' ? `cursor: pointer;` : null)}
`;

const AccordionContent = styled.div`
  ${shadow(1)}

  ${({
    theme: {
      spacing: { xsmall, medium },
      baseFontSize,
      colors: { primary, secondary },
    },
    opened,
  }) => `
    border-left: 4px solid ${primary[700]};
    border-radius: 4px;
    display: ${opened ? 'block' : 'none'}; 
    font-size: ${baseFontSize - 2}px;
    height: ${opened ? 'auto' : '0'};
    margin: ${medium}px 0;
    overflow: hidden;
    padding: ${medium}px;
    

    a {
      color: ${primary[700]};
      font-size: ${baseFontSize - 2}px;
      text-decoration: underline;

      &:hover {
        color: ${secondary[700]};
      }
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
  ${({
    theme: {
      baseFontSize,
      spacing: { large },
      colors: { primary },
    },
  }) => `
    font-size: ${baseFontSize * 1.5}px;
    margin-right: ${large}px;
    color: ${primary[700]};
  `}

  line-height: inherit;
`;

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
      <li className="accordion-item" key={title} opened={opened} color={color}>
        <AccordionHeader
          spacing={spacing}
          onClick={() => onItemClick(itemIndex)}
          aria-controls={contentId}
          id={headerId}
          theme={theme}
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
      </li>
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
  /** Theme natively passed by Quantum theme. Don't change this prop */
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  /** Set true to keep only one item open and close the remainings on click */
  keepOnlyOneOpen: PropTypes.bool,
  /**
   * this prop receives an array of objects to render the content of component.
   *
   * Ps 1: The content item should receive HTML elements
   *
   * Ps 2: onClick item receives a callback function its will trigger when the respective item of Accordion is clicked */
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
