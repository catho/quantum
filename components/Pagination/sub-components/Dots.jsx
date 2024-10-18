import PropTypes from 'prop-types';
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

Dots.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default Dots;
