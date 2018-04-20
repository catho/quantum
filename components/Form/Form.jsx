import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { children } = props;

    this.state = {
      childrenState: {},
      children: React
        .Children
        .map(children, (input) => {
          return React.cloneElement(input, { ...input.props });
        }),
    };

    children.map(({ props: { name, value } }) => this.state.childrenState[name] = value);

    console.log(this.state);
  }

  handleChange = (e, name) => {
    console.log(e.target.value, name);

    this.setState({
      childrenState: {
        [name]: e.target.value,
      },
    }, () => {
      console.log(this.state);
    });
  }

  validate = children => (
    React
      .Children
      .map(children, (input) => {
        const {
          validate = () => {},
          value,
          name,
          ...rest
        } = input.props;

        const invalid = validate(value);

        return invalid ? React.cloneElement(input, {
          ...rest,
          value: this.state.childrenState[name],
          error: invalid,
          onChange: e => this.handleChange(e, name),
        }) : input;
      })
  );

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('handleSubmit');

    const { children } = this.props;
    console.log('Children do props', children);
    console.log('Children do state', this.state.children);

    this.setState({
      children: this.validate(children),
    });
  }

  render() {
    const { children } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        { children }
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
