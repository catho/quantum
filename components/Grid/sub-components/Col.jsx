import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Col.module.css';

const Col = ({ children, medium }) => (
  <div
    className={classNames(styles.col, { [styles[`col-md-${medium}`]]: medium })}
  >
    {children}
  </div>
);

Col.defaultProps = {
  medium: undefined,
};

Col.propTypes = {
  medium: PropTypes.number,
};

Col.displayName = 'Col';

export default Col;
