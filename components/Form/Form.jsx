import Formsy from 'formsy-react';
import React from 'react';
import Input from './Input';

class Form extends React.Component {
  static Input = Input;

  render() {
    const { children } = this.props;

    return (
      <Formsy>
        {children}
      </Formsy>
    );
  }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
