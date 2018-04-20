import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
    .map(this.allChildren, (child) => {
      console.log(child);
      const { props: { name } } = child;
      return React.cloneElement(
        child,
        {
          onChange: e => this.handleChange(e, name),
          value: this.state.cloneValues[name],
        },
      );
    });

  handleChange = (e, name) => {
    this.setState({ cloneValues: { [name]: e.target.value } }, () => {
      this.setState({ clones: this.createClones() }, () => {
        console.log(this.state.cloneValues, this.state.clones);
      });
    });
  }

  handleSubmit = (event) => {
  }

  render() {
    const { clones } = this.state;

    return (
      <form>
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
