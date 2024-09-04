import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Row, Col } from '../Grid';
import SegmentedButtons from './SegmentedButtons';
import styles from './SegmentedControl.module.css';

const SegmentedControl = ({
  items,
  name = 'segmented-control',
  onChange = () => {},
  darkMode = false,
  className,
  ...rest
}) => {
  const classWrapper = classNames(styles.wrapper, className);

  return (
    <Row>
      <Col small={6} medium={5}>
        <div className={classWrapper} {...rest}>
          <SegmentedButtons
            items={items}
            name={name}
            darkMode={darkMode}
            onChange={onChange}
          />
        </div>
      </Col>
    </Row>
  );
};

SegmentedControl.propTypes = {
  /** this prop receives a array of object with all the content */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  /** sets the name of component */
  name: PropTypes.string,
  /** receives a callback function */
  onChange: PropTypes.func,
  /** this prop changes the layout to dark mode */
  darkMode: PropTypes.bool,
};

export default SegmentedControl;
