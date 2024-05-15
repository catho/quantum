import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Container.module.css';

const Container = ({
  'no-gutters': noGutter,
  withBreakpoints,
  fluid,
  className,
  children,
  ...rest
}) => {
  const containerClass = classNames(className, styles.container, {
    [styles['no-gutters']]: noGutter,
    [styles['with-breakpoint']]: withBreakpoints,
    [styles['container-fluid']]: fluid,
  });
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

Container.defaultProps = {
  fluid: false,
  withBreakpoints: false,
  'no-gutters': false,
};

Container.displayName = 'Container';

export default Container;
