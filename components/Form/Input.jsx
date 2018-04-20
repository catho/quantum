import React from 'react';
import { withFormsy } from 'formsy-react';

import DefaultInput from '../Input';

class InputClass extends DefaultInput {
}

const WithFormsyInput = withFormsy(InputClass);

const Input = ({ ...props }) => <WithFormsyInput {...props} />;

Input.propTypes = {};
Input.defaultProps = {};

export default Input;
