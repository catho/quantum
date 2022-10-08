import PropTypes from 'prop-types';

import ActionButton from './ActionButton';
import Dots from './Dots';
import PageButton from './PageButton';
import pagination from '../utils/pagination';
import uniqId from '../../shared/uniqId';

const DOT_KEY_GENERATOR = uniqId('dot-');

const Desktop = ({
  activePage,
  handlePageClick,
  handleHref,
  prevButtonText,
  nextButtonText,
  totalPages,
  activePageAriaLabel,
  pageAriaLabel,
  tabIndex,
  followOnlyFirstPage,
  showLastPagination,
}) => (
  <>
    <ActionButton
      tabIndex={tabIndex}
      aria-disabled={activePage === 1}
      onClick={handlePageClick(activePage - 1)}
      href={handleHref(activePage - 1)}
      rel={followOnlyFirstPage && activePage > 2 ? 'nofollow' : undefined}
    >
      {prevButtonText}
    </ActionButton>

    {pagination({ totalPages, activePage, showLastPagination }).map(page => {
      if (page === '...') {
        return <Dots key={DOT_KEY_GENERATOR.next().value} />;
      }

      return (
        <PageButton
          tabIndex={tabIndex}
          aria-current={activePage === page ? 'page' : false}
          aria-label={`${
            activePage === page ? `${activePageAriaLabel}, ` : ''
          }${pageAriaLabel} ${page}`}
          key={page}
          active={activePage === page}
          onClick={handlePageClick(page)}
          href={handleHref(page)}
          rel={followOnlyFirstPage && page > 1 ? 'nofollow' : undefined}
        >
          {page}
        </PageButton>
      );
    })}

    <ActionButton
      tabIndex={tabIndex}
      aria-disabled={activePage === totalPages}
      onClick={handlePageClick(activePage + 1)}
      href={handleHref(activePage + 1)}
      rel={followOnlyFirstPage ? 'nofollow' : undefined}
    >
      {nextButtonText}
    </ActionButton>
  </>
);

Desktop.propTypes = {
  tabIndex: PropTypes.number,
  activePage: PropTypes.number,
  activePageAriaLabel: PropTypes.string,
  handlePageClick: PropTypes.func,
  handleHref: PropTypes.func,
  totalPages: PropTypes.number.isRequired,
  prevButtonText: PropTypes.string,
  nextButtonText: PropTypes.string,
  pageAriaLabel: PropTypes.string,
  followOnlyFirstPage: PropTypes.bool,
};

Desktop.defaultProps = {
  tabIndex: 0,
  activePage: 1,
  activePageAriaLabel: 'Current Page',
  nextButtonText: 'Next',
  pageAriaLabel: 'Page',
  handleHref: undefined,
  prevButtonText: 'Previous',
  handlePageClick: undefined,
  followOnlyFirstPage: false,
};

export default Desktop;
