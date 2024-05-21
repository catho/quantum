import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Rect.module.css';

const RectComponent = ({ as: element, ...rest }) =>
  element === 'div' ? <div {...rest} /> : <span {...rest} />;

const Rect = ({ width, height, style, className, ...rest }) => {
  const rectClass = classNames(styles.rect, className);

  return (
    <RectComponent
      {...rest}
      className={rectClass}
      style={{ width, height, ...style }}
    />
  );
};

Rect.defaultProps = {
  as: 'div',
  width: undefined,
  height: undefined,
};

Rect.propTypes = {
  as: PropTypes.oneOf(['div', 'span']),
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Rect;
