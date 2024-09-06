import classNames from 'classnames';
import PropTypes from 'prop-types';
import Rect from './Rect';
import styles from './Tag.module.css';

const Tag = ({ size = 'medium', className, ...rest }) => {
  const tagClass = classNames(styles.tag, styles[`tag-${size}`], className);

  return <Rect {...rest} className={tagClass} />;
};

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Tag;
