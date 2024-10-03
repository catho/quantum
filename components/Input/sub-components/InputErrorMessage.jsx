import classNames from 'classnames';
import { ErrorMessage } from '../../shared';
import styles from './InputErrorMessage.module.css';

const InputErrorMessage = ({
  className,
  children,
  skin = 'default',
  ...rest
}) => {
  const inputErrorMessageClass = classNames(
    { [styles['error-message-dark']]: skin === 'dark' },
    className,
  );

  return (
    <ErrorMessage className={inputErrorMessageClass} {...rest}>
      {children}
    </ErrorMessage>
  );
};

InputErrorMessage.displayName = 'InputErrorMessage';

export default InputErrorMessage;
