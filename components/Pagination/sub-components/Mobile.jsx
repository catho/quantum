import PropTypes from 'prop-types';
import classNames from 'classnames';
import ActionButton from './ActionButton';
import styles from './Mobile.module.css';

const Mobile = ({
  activePage = 1,
  handlePageClick = () => {},
  handleHref = () => {},
  prevButtonText = 'Previous',
  nextButtonText = 'Next',
  totalPages,
  infoFormatter = (currentPage, lastPage) => `${currentPage} of ${lastPage}`,
  followOnlyFirstPage = false,
}) => {
  const infoClass = classNames(styles['pages-info']);
  const previousButtonClass = classNames(
    styles['switch-button'],
    styles['switch-button-right'],
  );
  const nextButtonClass = classNames(
    styles['switch-button'],
    styles['switch-button-left'],
  );

  return (
    <>
      <ActionButton
        tabIndex={0}
        aria-disabled={activePage === 1}
        onClick={handlePageClick(activePage - 1)}
        href={handleHref(activePage - 1)}
        className={previousButtonClass}
        rel={followOnlyFirstPage && activePage > 2 ? 'nofollow' : undefined}
      >
        {prevButtonText}
      </ActionButton>
      <span className={infoClass}>{infoFormatter(activePage, totalPages)}</span>
      <ActionButton
        tabIndex={0}
        aria-disabled={activePage === totalPages}
        onClick={handlePageClick(activePage + 1)}
        href={handleHref(activePage + 1)}
        className={nextButtonClass}
        rel={followOnlyFirstPage ? 'nofollow' : undefined}
      >
        {nextButtonText}
      </ActionButton>
    </>
  );
};

Mobile.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  infoFormatter: PropTypes.func,
  nextButtonText: PropTypes.string,
  prevButtonText: PropTypes.string,
  handleHref: PropTypes.func,
  handlePageClick: PropTypes.func,
  followOnlyFirstPage: PropTypes.bool,
};

export default Mobile;
