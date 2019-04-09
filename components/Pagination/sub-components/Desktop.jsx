import React from 'react';
import PropTypes from 'prop-types';

import ActionButton from './ActionButton';
import Dots from './Dots';
import Page from './Page';
import pagination from '../utils/pagination';

const generateDotsKey = index => `dots-${index}`;

const Desktop = ({
  activePage,
  handlePageClick,
  handleHref,
  prevButtonText,
  nextButtonText,
  totalPages,
  activePageAriaLabel,
  pageAriaLabel,
}) => (
  <>
    <ActionButton
      aria-disabled={activePage === 1}
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
      onClick={handlePageClick(activePage + 1)}
      href={handleHref(activePage + 1)}
    >
      {nextButtonText}
    </ActionButton>
  </>
);

Desktop.propTypes = {
  activePage: PropTypes.number,
  activePageAriaLabel: PropTypes.string,
  handlePageClick: PropTypes.func,
  handleHref: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  pageAriaLabel: PropTypes.string,
};

Desktop.defaultProps = {
  activePage: 1,
  activePageAriaLabel: 'Current Page',
  nextButtonText: 'Next',
  pageAriaLabel: 'Page',
  handleHref: undefined,
  prevButtonText: 'Previous',
  handlePageClick: undefined,
};

export default Desktop;
