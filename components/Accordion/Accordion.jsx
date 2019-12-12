import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors,
  spacing as defaultSpacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import Icon from '../Icon';

const Wrapper = styled.ul`
  ${({
    theme: {
      spacing: { xxsmall, large },
      baseFontSize,
      colors: {
        neutral: { 900: color },
      },
    },
  }) => `
    font-size: ${baseFontSize}px;
    padding: 0 ${large - xxsmall}px;
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
  ${({ baseFontSize }) => `
    font-size: ${baseFontSize}px;
  `}
  font-weight: bold;
  line-height: inherit;
`;

const AccordionHeader = styled.div`
  ${({ spacing: { large, medium } }) => `
    line-height: ${large}px;
    height: ${large}px;
    padding: ${medium}px 0;
  `}
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  background: inherit;
  border: none;
  box-sizing: content-box;

  ${({ as }) => (as === 'button' ? `cursor: pointer;` : null)}
`;

const AccordionContent = styled.div`
  height: ${({ opened }) => (opened ? 'auto' : '0')};
  transform: scaleY(${({ opened }) => (opened ? '1' : '0')});
  transform-origin: top;
  overflow: hidden;
  transition: height, transform 0.4s ease;
`;

const IconWrapper = styled.div`
  line-height: inherit;

  .material-icons {
    ${({ baseFontSize }) => `
      font-size: ${baseFontSize * 1.5}px;
    `}
    line-height: inherit;
  }
`;

const InlineContenWrapper = styled.div`
  display: inline-block;
  max-height: 24px;
  overflow-y: hidden;
`;

AccordionItem.displayName = 'AccordionItem';
AccordionHeader.displayName = 'AccordionHeader';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
    this.setAccordionItems = this.setAccordionItems.bind(this);
  }

  setAccordionItems(items) {
    this.setState({ items });
  }

  toggleItem = indexToChange => {
    const { items } = this.state;
    const { keepOnlyOneOpen } = this.props;
    let newItems = items;

    if (keepOnlyOneOpen) {
      newItems = items.map(item => ({ ...item, opened: false }));
    }

    newItems[indexToChange].opened = !items[indexToChange].opened;

    this.setAccordionItems(newItems);
  };

  renderItem(item, itemIndex) {
    const { title, content, inlineContent, opened, onItemClick } = item;
    const {
      theme: {
        colors: {
          neutral: { 900: color },
        },
        spacing,
        baseFontSize,
      },
    } = this.props;
    const headerProps = inlineContent
      ? { as: 'div' }
      : {
          type: 'button',
          as: 'button',
          onClick: () => onItemClick(itemIndex),
        };

    return (
      <AccordionItem key={title} opened={opened} color={color}>
        <AccordionHeader {...headerProps} spacing={spacing}>
          <AccordionTitle baseFontSize={baseFontSize}>{title}</AccordionTitle>
          {!inlineContent && (
            <IconWrapper baseFontSize={baseFontSize}>
              <Icon name={opened ? 'expand_less' : 'expand_more'} />
            </IconWrapper>
          )}
          {inlineContent && (
            <InlineContenWrapper>{inlineContent}</InlineContenWrapper>
          )}
        </AccordionHeader>
        {content && (
          <AccordionContent opened={opened}>{content}</AccordionContent>
        )}
      </AccordionItem>
    );
  }

  render() {
    const { theme } = this.props;
    const { items } = this.state;

    return (
      <Wrapper theme={theme}>
        {items.map((item, index) => {
          const customItem = item;
          if (!item.inlineContent) {
            customItem.onItemClick = i => {
              if (typeof item.onClick === 'function') {
                item.onClick();
              }
              this.toggleItem(i);
            };
            customItem.opened = !!item.opened;
          }

          return this.renderItem(customItem, index);
        })}
      </Wrapper>
    );
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
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
  /** Set true to keep only one item open and close the remainings on click */
  keepOnlyOneOpen: PropTypes.bool,
  /** Items to render in accordion, if you put a inlineContent, the content will not be rendered */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
      inlineContent: PropTypes.node,
      opened: PropTypes.bool,
      onClick: PropTypes.func,
    }),
  ).isRequired,
};

export default Accordion;
