import PropTypes from 'prop-types';
import Input from '../../Input';

class FormInput extends Input {}
FormInput.defaultProps.validate = () => '';
FormInput.propTypes.validate = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.func,
]);

export default FormInput;
