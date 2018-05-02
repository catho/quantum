import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './sub-components/FormInput';
import Submit from './sub-components/Submit';

function execValidate(validate, props) {
  if (typeof validate === 'function') {
    return validate(props);
  }

  const { validate: fn, error } = validate;
  const msg = fn(props);

  return msg ? error || msg : '';
}

class Form extends React.Component {
  static Input = FormInput;
  static Submit = Submit;

  constructor(props) {
    super(props);

    const { children } = this.props;

    this.state = {
      cloneValues: {},
      errors: {},
      valid: true,
    };

    React
      .Children
      .map(
        children,
        (child) => {
          const { name, value } = child.props;

          this.state.cloneValues[name] = value;
          this.state.errors[name] = '';
        },
      );

    // this.state.clones = this.createClones();
  }

  createClones = () => React
    .Children
    .map(
      this.props.children,
      (child) => {
        const { name, value } = child.props;

        this.state.cloneValues[name] = value;

        // const { [name]: stateValue } = this.state.cloneValues;

        // return React.cloneElement(
        //   child,
        //   {
        //     onChange: this.handleChange,
        //     value: stateValue,
        //   },
        // );
      },
    );

  findError = (child) => {
    const { props } = child;
    const { validate = () => {} } = props;

    let invalid;
    if (Array.isArray(validate)) {
      for (let i = 0; i < validate.length; i += 1) {
        invalid = execValidate(validate[i], props);

        if (invalid) break;
      }
    } else {
      invalid = execValidate(validate, props);
    }

    if (invalid) {
      this.setState({ valid: false });
    }

    return invalid;
  }

  validateError = children => React
    .Children
    .map(
      children,
      (child) => {
        const { name } = child.props;

        const _error = this.findError(child);

        const newError = this.state.errors;

        newError[name] = _error;

        this.setState({ errors: newError });
      },
    );

  handleChange = ({ target: { name } }, { value }) => {
    const cloneValues = {
      ...this.state.cloneValues,
      [name]: value,
    };

    this.setState({ cloneValues });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Start validation process assuming form valid.
    this.setState({ valid: true });
    const clones = this.validateError(this.props.children);

    const { onSubmit, onValidSubmit } = this.props;

    this.setState({ clones }, () => {
      const { valid } = this.state;

      onSubmit({ valid });

      if (valid) onValidSubmit(this.state.cloneValues);
    });
  }

  render() {
    const { children } = this.props;

    return (
      <form {...this.props} onSubmit={this.handleSubmit} noValidate>
        <pre>{ JSON.stringify(this.state, null, 2)}</pre>
        {
          React
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
                        value: this.state.cloneValues[name],
                        error: this.state.errors[name],
                        onChange: this.handleChange,
                      },
                    )
                )
              },
            )
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
