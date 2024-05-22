import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CircularLoader.module.css';

const CircularLoader = (props) => {
  const { size, skin, className, ...rest } = props;

  const wrapperStyles = classNames(
    styles.wrapper,
    styles[`wrapper-${size}`],
    className,
  );

  const contentStyles = classNames(
    styles.content,
    styles[`content-${skin}-color`],
  );

  return (
    <div role="progressbar" {...rest} className={wrapperStyles}>
      <svg className={contentStyles} viewBox="22 22 44 44">
        <circle className={styles.circle} />
      </svg>
    </div>
  );
};

CircularLoader.defaultProps = {
  size: 'medium',
  skin: 'primary',
};

CircularLoader.propTypes = {
  size: PropTypes.oneOf(['medium', 'large', 'xlarge', 'xxlarge', 'xxxlarge']),
  skin: PropTypes.oneOf(['primary', 'secondary']),
};

export default CircularLoader;
