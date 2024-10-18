import classNames from 'classnames';
import styles from './Dots.module.css';

const Dots = ({ className, ...props }) => {
  const wrapperClass = classNames(styles['wrapper-dot'], className);
  const dotsClass = classNames(styles['pagination-dot']);

  return (
    <div className={wrapperClass} {...props}>
      <span className={dotsClass} />
    </div>
  );
};

export default Dots;
