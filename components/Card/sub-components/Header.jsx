import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ className = '', children, ...props }) => {
  const classHeader = classNames(styles['header-wrapper'], className);

  return (
    <header className={classHeader} {...props}>
      {children}
    </header>
  );
};

Header.displayName = 'Card.Header';

export default Header;
