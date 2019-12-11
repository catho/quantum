import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BREAKPOINTS } from '../shared';
import Desktop from './sub-components/Desktop';
import Mobile from './sub-components/Mobile';

const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`;

class Pagination extends React.Component {
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
      ...props
    } = this.props;

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

    const width = (window && window.innerWidth) || BREAKPOINTS.small.width;

    const Component = width > BREAKPOINTS.small.width ? Desktop : Mobile;

    return (
      <Wrapper aria-label={ariaLabel} {...props}>
        <Component
          tabIndex={tabIndex}
          activePage={activePage}
          handlePageClick={handlePageClick}
          handleHref={handleHref}
          prevButtonText={prevButtonText}
          nextButtonText={nextButtonText}
          totalPages={totalPages}
          activePageAriaLabel={activePageAriaLabel}
          pageAriaLabel={pageAriaLabel}
          infoFormatter={infoFormatter}
        />
      </Wrapper>
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
};

export default Pagination;
