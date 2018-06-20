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

class Form extends React.Component {
  static _isValidElement = element => React.isValidElement(element)
    && [Input, ...Object.values(InputTypes)].includes(element.type)

  constructor(props) {
    super(props);

    this.state = {
      values: {},
      errors: {},
      valid: false,
    };

    const { children } = this.props;

    React
      .Children
      .map(children, (child) => {
        if (!Form._isValidElement(child)) return;

        const { props: { name, value } } = child;
        if (value) this.state.values[name] = value;
      });
  }

  _createClones = children => React
    .Children
    .map(
      children,
      (child) => {
        if (!Form._isValidElement(child)) {
          return child;
        }

        const { name, error, onChange } = child.props;
        return (
          React
            .cloneElement(
              child,
              {
                value: this.state.values[name],
                error: this.state.errors[name] || error,
                onChange: (e, data) => {
                  this._handleChange(e, data);
                  onChange(e, data);
                },
              },
            )
        );
      },
    );

  _findError = (child) => {
    const { props } = child;
    const { validate = () => {} } = props;

    let invalid;

    const _props = {
      ...props,
      value: this.state.values[props.name],
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
  }

  _validateError = children => React
    .Children
    .map(
      children,
      (child) => {
        const { name } = child.props;

        const _error = this._findError(child);

        const newError = this.state.errors;
        newError[name] = _error;

        this.setState({ errors: newError });
      },
    );

  _handleChange = ({ target: { name } }, { value }) => {
    const values = {
      ...this.state.values,
      [name]: value,
    };

    const newErrors = this.state.errors;
    newErrors[name] = '';

    this.setState({ errors: newErrors });
    this.setState({ values });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this._validateError(this.props.children);

    const { onSubmit, onValidSubmit } = this.props;

    const valid = !Object.values(this.state.errors).find(e => e);

    this.setState({ valid }, () => {
      onSubmit({ valid: this.state.valid });

      if (valid) onValidSubmit(this.state.values);
    });
  }

  render() {
    // Removing invalid form props, to avoid warnings
    const _props = { ...this.props };
    delete _props.onValidSubmit;

    return (
      <form {..._props} onSubmit={this.handleSubmit}>
        {
          this._createClones(this.props.children)
        }
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
  onSubmit: PropTypes.func,
  onValidSubmit: PropTypes.func,
  /** Default html attribute, that prevents default browser validations */
  noValidate: PropTypes.bool,
};

export default Form;
