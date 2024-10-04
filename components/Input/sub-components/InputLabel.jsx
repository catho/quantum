import classNames from 'classnames';
import styles from './InputLabel.module.css';

const InputLabel = ({ className, children, htmlFor, ...rest }) => {
  const labelClass = classNames(styles['input-label'], className);

  return (
    <label htmlFor={htmlFor} className={labelClass} {...rest}>
      {children}
    </label>
  );
};

InputLabel.displayName = 'InputLabel';

export default InputLabel;
