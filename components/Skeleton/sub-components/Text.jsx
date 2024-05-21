import classNames from 'classnames';
import Rect from './Rect';
import styles from './Text.module.css';

const Text = ({ className, ...rest }) => {
  const textClass = classNames(styles.text, className);

  return <Rect {...rest} className={textClass} />;
};

export default Text;
