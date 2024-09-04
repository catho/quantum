import classNames from 'classnames';
import PropTypes from 'prop-types';
import Rect from './Rect';
import styles from './Button.module.css';

const Button = ({ size = 'medium', className, ...rest }) => {
  const buttonClass = classNames(
    styles.button,
    styles[`button-${size}`],
    className,
  );

  return <Rect {...rest} className={buttonClass} />;
};

Button.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
};

export default Button;
