import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = ({ className = '', children, ...props }) => {
  const classFooter = classNames(className, styles['footer-wrapper']);

  return (
    <footer {...props} className={classFooter}>
      {children}
    </footer>
  );
};

Footer.displayName = 'Card.Footer';

export default Footer;
