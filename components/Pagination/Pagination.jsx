import { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { Hide } from '../Grid';
import Desktop from './sub-components/Desktop';
import Mobile from './sub-components/Mobile';
import styles from './Pagination.module.css';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const {
      ariaLabel,
      activePage,
      activePageAriaLabel,
      nextButtonText,
      pageAriaLabel,
      pageHref,
      prevButtonText,
      onPageClick,
      totalPages,
      infoFormatter,
      tabIndex,
      followOnlyFirstPage,
      hideLastPagination,
      ...props
    } = this.props;
    const wrapperClass = classNames(styles.wrapper);

    const handlePageClick = (page) => (e) => {
      if (!onPageClick) {
        return undefined;
      }

      e.preventDefault();

      if (page <= 0 || page > totalPages) {
        return false;
      }

      return onPageClick(page, e);
    };

    const handleHref = (page) => {
      if (!pageHref || onPageClick || page <= 0 || page > totalPages) {
        return undefined;
      }

      return pageHref(page);
    };

    const attributes = {
      tabIndex,
      activePage,
      handlePageClick,
      handleHref,
      prevButtonText,
      nextButtonText,
      totalPages,
      activePageAriaLabel,
      pageAriaLabel,
      infoFormatter,
      followOnlyFirstPage,
      hideLastPagination,
    };
    return (
      <>
        <Hide xsmall small>
          <nav className={wrapperClass} aria-label={ariaLabel} {...props}>
            <Desktop {...attributes} />
          </nav>
        </Hide>

        <Hide medium large>
          <nav className={wrapperClass} aria-label={ariaLabel} {...props}>
            <Mobile {...attributes} />
          </nav>
        </Hide>
      </>
    );
  }
}

Pagination.propTypes = {
  tabIndex: PropTypes.number,
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
  /** When viewport is less than 600px (small breakpoint) the pagination will show the mobile layout, this function can be used to format the current and last page information. */
  infoFormatter: PropTypes.func,
  /** If true, add rel="nofollow" property to all pagination buttons except page 1. */
  followOnlyFirstPage: PropTypes.bool,
  /** If false, total pages will disappear. */
  hideLastPagination: PropTypes.bool,
};

Pagination.defaultProps = {
  tabIndex: undefined,
  ariaLabel: 'pagination',
  activePage: 1,
  activePageAriaLabel: 'Current Page',
  nextButtonText: 'Next',
  pageAriaLabel: 'Page',
  pageHref: undefined,
  prevButtonText: 'Previous',
  onPageClick: undefined,
  infoFormatter: undefined,
  followOnlyFirstPage: false,
  hideLastPagination: false,
};

export default Pagination;
