import classNames from 'classnames';
import styles from './HiddenInput.module.css';

const HiddenInput = ({ className, ...rest }) => {
  const hiddenInputClass = classNames(styles['hidden-input'], className);

  return <input className={hiddenInputClass} {...rest} />;
};

export default HiddenInput;
