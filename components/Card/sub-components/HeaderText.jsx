import classNames from 'classnames';
import styles from './HeaderText.module.css';

const HeaderText = ({ className = '', children, ...props }) => {
  const classHeaderText = classNames(className, styles['header-text']);

  return (
    <div className={classHeaderText} {...props}>
      {children}
    </div>
  );
};

HeaderText.displayName = 'Card.HeaderText';

export default HeaderText;
