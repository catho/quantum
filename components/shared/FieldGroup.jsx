import classNames from 'classnames';
import styles from './FieldGroup.module.css';

const FieldGroup = ({ className, skin = 'default', children, ...rest }) => {
  const fieldGroupClass = classNames(
    styles['field-group'],
    { [styles['field-group-dark']]: skin === 'dark' },
    className,
  );

  return (
    <div className={fieldGroupClass} {...rest}>
      {children}
    </div>
  );
};

export default FieldGroup;
