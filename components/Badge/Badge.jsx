import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.module.css';

/** This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead */
const Badge = ({
  className = '',
  children = '',
  number = 0,
  skin = 'neutral',
  inverted = false,
  dot = false,
}) => {
  const value = number > 99 ? '99+' : number;
  const wrapperClass = classNames(
    styles.wrapper,
    {
      [styles['wrapper-content']]: children,
    },
    className,
  );

  const badgeClass = classNames(styles.badge, styles[`badge-skin-${skin}`], {
    [styles['badge-xxsmall']]: !Number.isInteger(value),
    [styles['badge-content']]: children,
    [styles['badge-dot']]: dot,
    [styles[`badge-skin-${skin}-inverted`]]: inverted,
  });

  return (
    <div className={wrapperClass}>
      <span className={badgeClass}>{dot || value}</span>
      {children}
    </div>
  );
};

Badge.displayName = 'Badge';

Badge.propTypes = {
  /** Set background and text colors */
  skin: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'neutral',
  ]),
  /** When passed a children to &lt;Badge /&gt;, the badge will be displayed at top-right corner of the children. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Number to be displayed inside badge. When number is bigger than 99, it will show "99+" instead of the exact number. */
  number: PropTypes.number,
  /** Swap background and text colors. */
  inverted: PropTypes.bool,
  /** Shows only a dot, without any number. */
  dot: PropTypes.bool,
};

export default Badge;
