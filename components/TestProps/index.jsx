import PropTypes from 'prop-types';

const TestProps = () => (null);

TestProps.propTypes = {
  testArray: PropTypes.arrayOf(PropTypes.any),
  testBool: PropTypes.bool,
  testFunc: PropTypes.func,
  testNumber: PropTypes.number,
  testObject: PropTypes.objectOf(PropTypes.any),
  testString: PropTypes.string,
};

TestProps.defaultProps = {
  testArray: [],
  testBool: true,
  testFunc: () => null,
  testNumber: 0,
  testObject: {},
  testString: '',
};

export default TestProps;
