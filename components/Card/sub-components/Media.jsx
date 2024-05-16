import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Media.module.css';

const Media = ({ className = '', style, src, alt, ...props }) => {
  const classMedia = classNames(styles['media-wrapper'], className);
  return (
    <div className={classMedia} style={style}>
      <img className={styles['media-image']} src={src} alt={alt} {...props} />
    </div>
  );
};

Media.displayName = 'Card.Media';

Media.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Media;
