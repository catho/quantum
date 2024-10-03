import classNames from 'classnames';
import styles from './Label.module.css';

const Label = ({ className, children, htmlFor, ...rest }) => {
  const labelClass = classNames(styles.label, className);

  return (
    <label htmlFor={htmlFor} className={labelClass} {...rest}>
      {children}
    </label>
  );
};

export default Label;
