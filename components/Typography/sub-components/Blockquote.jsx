import classNames from 'classnames';
import styles from './Blockquote.module.css';

const Blockquote = ({ className = '', children, ...props }) => {
  const classContent = classNames(styles.blockquote, className);
  return (
    <blockquote className={classContent} {...props}>
      {children}
    </blockquote>
  );
};

export default Blockquote;
