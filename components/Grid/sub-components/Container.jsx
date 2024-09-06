import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Container.module.css';

const Container = ({
  'no-gutters': noGutter = false,
  withBreakpoints = false,
  fluid = false,
  className,
  children,
  ...rest
}) => {
  const containerClass = classNames(
    styles.container,
    {
      [styles['no-gutters']]: noGutter,
      [styles['with-breakpoint']]: withBreakpoints,
      [styles['container-fluid']]: fluid,
    },
    className,
  );
  return (
    <div {...rest} className={containerClass}>
      {children}
    </div>
  );
};

Container.propTypes = {
  withBreakpoints: PropTypes.bool,
  fluid: PropTypes.bool,
  'no-gutters': PropTypes.bool,
};

Container.displayName = 'Container';

export default Container;
