import classNames from 'classnames';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ className, children, ...rest }) => {
  const errorMessageClass = classNames(styles['error-message'], className);

  return (
    <span className={errorMessageClass} {...rest}>
      {children}
    </span>
  );
};

export default ErrorMessage;
