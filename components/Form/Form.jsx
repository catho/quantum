import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import InputTypes from '../Input/InputTypes';

function execValidate(validate, props) {
  if (typeof validate === 'function') {
    return validate(props);
  }

  const { validate: fn, error } = validate;
  const msg = fn(props);

  return msg ? error || msg : '';
}

const typeNames = Object.values(InputTypes).map(
  InputType => InputType.displayName,
);

class Form extends React.Component {
  static _isValidElement = element =>
    React.isValidElement(element) &&
    [Input.displayName, ...typeNames].includes(element.type.displayName);

  constructor(props) {
    super(props);

    this.state = {
      values: {},
      errors: {},
      valid: false,
    };

    const { children } = this.props;
    const { values } = this.state;

    this._recursiveMap(children, child => {
      if (!Form._isValidElement(child)) return;

      const {
        props: { name, value },
      } = child;
      if (value) values[name] = value;
    });
  }

  _createClones = children => {
    const { values, errors } = this.state;

    const generatedClones = this._recursiveMap(children, child => {
      if (!Form._isValidElement(child)) {
        return child;
      }
      const { name, error, onChange = () => {} } = child.props;
      return React.cloneElement(child, {
        value: values[name],
        error: errors[name] || error,
        onChange: e => {
          this._handleChange(e);
          onChange(e);
        },
      });
    });
    return generatedClones;
  };

  _recursiveMap = (children, fn) =>
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.props.children) {
        return fn(
          React.cloneElement(child, {
            children: this._recursiveMap(child.props.children, fn),
          }),
        );
      }
      return fn(child);
    });

  _findError = child => {
    const { props } = child;
    const { values } = this.state;
    const { validate = () => {} } = props;

    let invalid;

    const _props = {
      ...props,
      value: values[props.name],
    };

    if (Array.isArray(validate)) {
      for (let i = 0; i < validate.length; i += 1) {
        invalid = execValidate(validate[i], _props);

        // Stop validation when the first occurs
        if (invalid) break;
      }
    } else {
      invalid = execValidate(validate, _props);
    }

    if (invalid) {
      this.setState({ valid: false });
    }

    return invalid;
  };

  _validateError = children => {
    const { errors } = this.state;

    return this._recursiveMap(children, child => {
      const { name } = child.props;

      const _error = this._findError(child);

      const newError = errors;
      newError[name] = _error;

      this.setState({ errors: newError });
    });
  };

  _handleChange = ({ target: { name, value } }) => {
    const { values, errors } = this.state;
    const newValues = {
      ...values,
      [name]: value,
    };

    const newErrors = errors;
    newErrors[name] = '';

    this.setState({ errors: newErrors });
    this.setState({ values: newValues });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit, onValidSubmit, children } = this.props;
    const { errors, values } = this.state;

    this._validateError(children);

    const isValid = !Object.values(errors).find(e => e);

    this.setState({ valid: isValid }, () => {
      const { valid: updatedValid } = this.state;
      onSubmit({ valid: updatedValid });

      if (isValid) onValidSubmit(values);
    });
  };

  render() {
    // Removing invalid form props, to avoid warnings
    const _props = { ...this.props };
    const { children } = _props;
    delete _props.onValidSubmit;

    return (
      <form {..._props} onSubmit={this.handleSubmit}>
        {this._createClones(children)}
      </form>
    );
  }
}

Form.defaultProps = {
  onSubmit: () => {},
  onValidSubmit: () => {},
  noValidate: true,
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  /** A callback triggered every submit trial, with a flag that indicates that it is valid */
  onSubmit: PropTypes.func,
  /** A callback triggered every valid submit, with a object with input values */
  onValidSubmit: PropTypes.func,
  /** Default html attribute, that prevents default browser validations */
  noValidate: PropTypes.bool,
};

export default Form;
