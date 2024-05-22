import classNames from 'classnames';
import Rect from './Rect';
import styles from './Circle.module.css';

const Circle = ({ className, ...rest }) => {
  const circleClass = classNames(styles.circle, className);

  return <Rect {...rest} className={circleClass} />;
};

export default Circle;
