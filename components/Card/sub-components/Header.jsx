import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ className = '', children, ...props }) => {
  const classHeader = classNames(className, styles['header-wrapper']);

  return (
    <header className={classHeader} {...props}>
      {children}
    </header>
  );
};

Header.displayName = 'Card.Header';

export default Header;
