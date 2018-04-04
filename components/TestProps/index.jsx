import React from 'react';
import PropTypes from 'prop-types';

/** Componente de Teste */
class TestProps extends React.Component {
  render() {
    const {testString} = this.props;
    return (
      <button>- {testString}</button>
    );
  }
};

TestProps.propTypes = {
  testArray: PropTypes.arrayOf(PropTypes.any).isRequired,

  /** Essa merlim aqui, é um bool */
  testBool: PropTypes.bool.isRequired,
  testFunc: PropTypes.func.isRequired,
  testNumber: PropTypes.number.isRequired,
  testObject: PropTypes.objectOf(PropTypes.any).isRequired,
  testString: PropTypes.string.isRequired,
  testOneOf: PropTypes.oneOf(['one', 'two', 'three'])
};

TestProps.defaultProps = {
  testArray: [],
  testBool: true,
  testFunc: () => null,
  testNumber: 0,
  testObject: {},
  testString: '',
  testOneOf: 'one'
};

export default TestProps;
