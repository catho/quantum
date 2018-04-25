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
      valid: true,
    };

    React.Children.forEach(children, (({ props: { name, value } }) => {
      this.state.cloneValues[name] = value;
    }));

    this.state.clones = this.createClones();
  }

  createClones = () => React
    .Children
    .map(
      this.props.children,
      child => React.cloneElement(
        child,
        {
          onChange: this.handleChange,
          value: this.state.cloneValues[child.props.name],
        },
      ),
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
      child => React.cloneElement(
        child,
        {
          error: this.findError(child),
        },
      ),
    );

  handleChange = ({ target: { name } }, { value }) => {
    const cloneValues = {
      ...this.state.cloneValues,
      [name]: value,
    };

    this.setState({ cloneValues }, () => {
      this.setState({ clones: this.createClones() });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Start validation process assuming form valid.
    this.setState({ valid: true });
    const clones = this.validateError(this.state.clones);

    const { onSubmit, onValidSubmit } = this.props;

    this.setState({ clones }, () => {
      const { valid } = this.state;

      onSubmit({ valid });

      if (valid) onValidSubmit({ data: this.state.cloneValues });
    });
  }

  render() {
    const { clones } = this.state;

    return (
      <form {...this.props} onSubmit={this.handleSubmit} noValidate>
        { clones }
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
