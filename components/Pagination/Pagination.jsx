import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Page from './sub-components/Page';
import ActionButton from './sub-components/ActionButton';
import Dots from './sub-components/Dots';

import pagination from './utils/pagination';

const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px !important;
`;

const generateDotsKey = index => `dots-${index}`;

const Pagination = ({
  ariaLabel,
  activePage,
  activePageAriaLabel,
  nextButtonText,
  pageAriaLabel,
  pageHref,
  prevButtonText,
  onPageClick,
  totalPages,
  ...props
}) => {
  const handlePageClick = page => e => {
    if (!onPageClick) {
      return undefined;
    }

    e.preventDefault();

    if (page <= 0 || page > totalPages) {
      return false;
    }

    return onPageClick(page);
  };

  const handleHref = page => {
    if (!pageHref || onPageClick || page <= 0 || page > totalPages) {
      return undefined;
    }

    return pageHref(page);
  };

  return (
    <Wrapper aria-label={ariaLabel} {...props}>
      <ActionButton
        aria-disabled={activePage === 1}
        disabled={activePage === 1}
        onClick={handlePageClick(activePage - 1)}
        href={handleHref(activePage - 1)}
      >
        {prevButtonText}
      </ActionButton>

      {pagination({ totalPages, activePage }).map((page, index) => {
        if (page === '...') {
          return <Dots key={generateDotsKey(index)} />;
        }

        return (
          <Page
            aria-current={activePage === page ? 'page' : false}
            aria-label={`${
              activePage === page ? `${activePageAriaLabel}, ` : ''
            }${pageAriaLabel} ${page}`}
            key={page}
            active={activePage === page}
            onClick={handlePageClick(page)}
            href={handleHref(page)}
          >
            {page}
          </Page>
        );
      })}

      <ActionButton
        aria-disabled={activePage === totalPages}
        disabled={activePage === totalPages}
        onClick={handlePageClick(activePage + 1)}
        href={handleHref(activePage + 1)}
      >
        {nextButtonText}
      </ActionButton>
    </Wrapper>
  );
};

Pagination.propTypes = {
  /** Set the aria-label html attribute to the root element of pagination */
  ariaLabel: PropTypes.string,
  /** Set the current page */
  activePage: PropTypes.number,
  /** aria-label attribute to active page button. */
  activePageAriaLabel: PropTypes.string,
  /** Set the number of pages to be displayed. */
  totalPages: PropTypes.number.isRequired,
  /** Set next page button text */
  nextButtonText: PropTypes.string,
  /** Page number button aria-label html attribute. */
  pageAriaLabel: PropTypes.string,
  /** Set the page anchor element href value. */
  pageHref: PropTypes.func,
  /** Set previous page button text. */
  prevButtonText: PropTypes.string,
  /** Function to be called when prev, next or page button is clicked, it receives the next page number as an argument. */
  onPageClick: PropTypes.func,
};

Pagination.defaultProps = {
  ariaLabel: 'pagination',
  activePage: 1,
  activePageAriaLabel: 'Current Page',
  nextButtonText: 'Next',
  pageAriaLabel: 'Page',
  pageHref: undefined,
  prevButtonText: 'Previous',
  onPageClick: undefined, // eslint-disable-line
};

export default Pagination;
