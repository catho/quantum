import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PageButton.module.css';

const PageButton = ({
  children,
  className,
  href,
  title,
  active = false,
  ...rest
}) => {
  const pageClass = classNames(
    styles['page-button'],
    { [styles['page-button-active']]: active },
    className,
  );

  return (
    <a className={pageClass} href={href} title={title} {...rest}>
      {children}
    </a>
  );
};

PageButton.displayName = 'PageButton';

PageButton.propTypes = {
  active: PropTypes.bool,
  tabIndex: PropTypes.number,
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default PageButton;
