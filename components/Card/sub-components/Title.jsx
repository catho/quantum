import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Title.module.css';

const Title = ({ className = '', children, small = false, ...props }) => {
  const classH2 = classNames(
    styles.title,
    {
      [styles['title-small']]: small,
    },
    className,
  );

  return (
    <h2 className={classH2} {...props}>
      {children}
    </h2>
  );
};

Title.displayName = 'Card.Title';

Title.propTypes = {
  /** default `font-size` is `24px`, with `small` prop defined the `font-size` is changed to `20px`. */
  small: PropTypes.bool,
};

export default Title;
