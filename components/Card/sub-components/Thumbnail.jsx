import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Thumbnail.module.css';

const Thumbnail = ({ className = '', src, alt, rounded = false, ...props }) => {
  const classImg = classNames(
    styles.thumbnail,
    {
      [styles['thumbnail-rounded']]: rounded,
    },
    className,
  );

  return (
    <img loading="lazy" src={src} alt={alt} className={classImg} {...props} />
  );
};

Thumbnail.displayName = 'Card.Thumbnail';

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  /** Display a rounded Thumbnail. */
  rounded: PropTypes.bool,
};

export default Thumbnail;
