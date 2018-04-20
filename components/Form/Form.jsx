import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

class FormInput extends Input {

}

FormInput.defaultProps = {
  validate: () => '',
};

FormInput.propTypes = {
  validate: PropTypes.func,
};

const Submit = ({ children, ...rest }) => <Button {...rest} type="submit"> {children} </Button>

class Form extends React.Component {
  static Input = FormInput;
  static Submit = Submit;

  constructor(props) {
    super(props);

    const { children } = this.props;
    this.allChildren = children;

    this.state = {
      cloneValues: {},
    };

    this.allChildren.forEach(({ props: { name, value } }) => {
      this.state.cloneValues[name] = value;
    });

    this.state.clones = this.createClones();
  }

  createClones = () => React
    .Children
    .map(
      this.allChildren,
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

    if (Array.isArray(validate)) {
      let invalid;
      for (let i = 0; i < validate.length; i += 1) {
        const v = validate[i];

        if (typeof v === 'function') {
          invalid = v(props);
        } else {
          const { validate: fn, error } = v;
          const msg = fn(props);

          invalid = msg ? error || msg : '';
        }

        if (invalid) break;
      }
      return invalid;
    }

    return validate(props);
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
    const clones = this.validateError(this.state.clones);

    this.setState({ clones });
  }

  render() {
    const { clones } = this.state;

    return (
      <form onSubmit={this.handleSubmit} noValidate>
        { clones }
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Form;
