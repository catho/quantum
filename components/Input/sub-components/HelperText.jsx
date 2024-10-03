import classNames from 'classnames';
import InputErrorMessage from './InputErrorMessage';
import styles from './HelperText.module.css';

const HelperText = ({ className, children, ...rest }) => {
  const helperTextClass = classNames(styles['helper-text'], className);

  return (
    <InputErrorMessage className={helperTextClass} {...rest}>
      {children}
    </InputErrorMessage>
  );
};

export default HelperText;
