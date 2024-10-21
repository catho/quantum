import classNames from 'classnames';
import styles from './ActionButton.module.css';

const ActionButton = ({ children, className, href, title, ...rest }) => {
  const actionButtonClass = classNames(styles.action, className);
  return (
    <a className={actionButtonClass} href={href} title={title} {...rest}>
      {children}
    </a>
  );
};
export default ActionButton;
