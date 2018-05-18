import React from 'react';
import PropTypes from 'prop-types';

function execValidate(validate, props) {
  if (typeof validate === 'function') {
    return validate(props);
  }

  const { validate: fn, error } = validate;
  const msg = fn(props);

  return msg ? error || msg : '';
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {},
      errors: {},
      valid: false,
    };
  }

  _createClones = children => React
    .Children
    .map(
      children,
      (child) => {
        const { name } = child.props;
        return (
          React
            .cloneElement(
              child,
              {
                value: this.state.values[name],
                error: this.state.errors[name],
                onChange: this._handleChange,
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
    return (
      <form {...this.props} onSubmit={this.handleSubmit} noValidate>
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
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func,
  onValidSubmit: PropTypes.func,
};

export default Form;
