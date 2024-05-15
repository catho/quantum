import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Hide.module.css';

const Hide = ({
  xsmall,
  small,
  medium,
  large,
  className,
  children,
  ...rest
}) => {
  const hideClass = classNames(className, {
    [styles['hide-xsmall']]: xsmall,
    [styles['hide-small']]: small,
    [styles['hide-medium']]: medium,
    [styles['hide-large']]: large,
  });

  return (
    <div {...rest} className={hideClass}>
      {children}
    </div>
  );
};

Hide.defaultProps = {
  xsmall: undefined,
  small: undefined,
  medium: undefined,
  large: undefined,
};

Hide.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
};

Hide.displayName = 'Hide';

export default Hide;
