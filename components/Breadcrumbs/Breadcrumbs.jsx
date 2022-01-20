import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { theme as defaultTheme } from '../shared';
import Icon from '../Icon';
import Link from '../Link';

const BreadcrumbsItems = styled.ol`
  display: flex;
  align-items: center;

  list-style: none;

  overflow: auto;

  ${({
    theme: {
      spacing: { xxsmall, small },
    },
  }) => css`
    padding: ${small}px ${xxsmall}px;
  `}
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;

  ${({
    theme: {
      baseFontSize,
      colors: { neutral },
      spacing: { xsmall },
    },
  }) => css`
    font-size: ${baseFontSize * 0.75}px;

    a {
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: ${neutral[700]};
    }

    & + li {
      margin-left: ${xsmall}px;
    }
  `}
`;

const BreadcrumbIcon = styled(Icon).attrs(
  ({ name = 'keyboard_arrow_right' }) => ({
    name,
    size: 'small',
    'aria-hidden': true,
  }),
)`
  ${({
    theme: {
      colors: { primary },
      spacing: { xxsmall, xsmall },
    },
    name,
  }) => css`
    margin-right: ${name === 'home' ? xxsmall : xsmall}px;
    color: ${primary[700]};
  `}
`;

const ExpandButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  background-color: transparent;

  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  ${({
    theme: {
      colors: { primary },
    },
  }) => css`
    color: ${primary[700]};
  `}
`;

const Breadcrumbs = ({ items, theme }) => {
  if (items.length < 2) {
    throw new Error('Breadcrumbs items should be greater or equal than 2.');
  }

  const [collapsed, setCollapsed] = useState(false);

  const breadcrumbsItemsEl = useRef(null);

  const lastItemIndex = items.length - 1;

  const [firstItem, ...restItems] = items;
  const lastItem = items[lastItemIndex];

  restItems.splice(lastItemIndex - 1, 1);

  useEffect(() => {
    if (items.length > 2 && breadcrumbsItemsEl.current) {
      const { scrollWidth, clientWidth } = breadcrumbsItemsEl.current;

      console.log(breadcrumbsItemsEl.current.clientWidth);

      setCollapsed(clientWidth < scrollWidth);
    }
  }, []);

  const renderMiddleItems = () =>
    restItems.map(item => (
      <BreadcrumbItem key={item.label} theme={theme}>
        <BreadcrumbIcon theme={theme} />
        <Link underline={false} href={item.url} title={item.label}>
          {item.label}
        </Link>
      </BreadcrumbItem>
    ));

  const renderExpandButton = () => (
    <BreadcrumbItem theme={theme}>
      <BreadcrumbIcon theme={theme} />
      <ExpandButton
        theme={theme}
        aria-label="Show all breadcrumbs"
        title="Show all breadcrumbs"
        onClick={() => setCollapsed(false)}
      >
        ...
      </ExpandButton>
    </BreadcrumbItem>
  );

  return (
    <nav>
      <BreadcrumbsItems
        ref={breadcrumbsItemsEl}
        aria-label="breadcrumb"
        theme={theme}
      >
        <BreadcrumbItem theme={theme}>
          <Link underline={false} href={firstItem.url} title={firstItem.label}>
            <BreadcrumbIcon theme={theme} name="home" />
            {firstItem.label}
          </Link>
        </BreadcrumbItem>

        {collapsed ? renderExpandButton() : renderMiddleItems()}

        <BreadcrumbItem theme={theme}>
          <BreadcrumbIcon theme={theme} />
          <span>{lastItem.label}</span>
        </BreadcrumbItem>
      </BreadcrumbsItems>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

Breadcrumbs.defaultProps = {
  theme: defaultTheme,
};

export default Breadcrumbs;
