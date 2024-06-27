import classNames from 'classnames';
import styles from './Subtitle.module.css';

const Subtitle = ({ className = '', children, ...props }) => {
  const classContent = classNames(styles.span, className);
  return (
    <span className={classContent} {...props}>
      {children}
    </span>
  );
};

export default Subtitle;
