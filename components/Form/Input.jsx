import React from 'react';
import { withFormsy } from 'formsy-react';

import DefaultInput from '../Input';

class InputClass extends React.Component {
  changeValue = (event) => {
    console.log(event.target.value);

    const { onChange, setValue } = this.props;

    onChange(event);
    setValue(event.target.value);
  }

  render() {
    const {
      getValue,
      isPristine,
      getErrorMessage,
      ...rest
    } = this.props;

    return (
      <DefaultInput
        {...rest}
        onChange={this.changeValue}
        value={getValue() || ''}
        error={
          !isPristine() ?
          getErrorMessage() :
          ''
        }
      />
    );
  }
}

const WithFormsyInput = withFormsy(InputClass);

const Input = ({ ...props }) => <WithFormsyInput {...props} />;

Input.propTypes = {};
Input.defaultProps = {};

export default Input;
