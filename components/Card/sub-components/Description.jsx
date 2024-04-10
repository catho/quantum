import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Description.module.css';

const Description = ({ className = '', children, small, ...props }) => {
  const classDescription = classNames(
    className,
    styles['description-content'],
    { [styles['description-content-small']]: small },
  );

  return (
    <div className={classDescription} {...props}>
      {children}
    </div>
  );
};

Description.displayName = 'Card.Description';

Description.propTypes = {
  /** default `font-size` is `14px`, with `small` prop defined the `font-size` is changed to `12px`. */
  small: PropTypes.bool,
};

Description.defaultProps = {
  small: false,
};

export default Description;
