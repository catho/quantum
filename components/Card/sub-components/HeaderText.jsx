import classNames from 'classnames';
import styles from './HeaderText.module.css';

const HeaderText = ({ className = '', children, ...props }) => {
  const classHeaderText = classNames(styles['header-text'], className);

  return (
    <div className={classHeaderText} {...props}>
      {children}
    </div>
  );
};

HeaderText.displayName = 'Card.HeaderText';

export default HeaderText;
