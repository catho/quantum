import React from 'react';
import PropTypes from 'prop-types';

let allChildren = {};

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { children } = this.props;
    allChildren = children;

    this.state = {};
    this.state.cloneValues = {};
     
    allChildren.map(({props: { name, value }}) => {
      this.state.cloneValues[name] = value;
    });

    this.state.clones = this.createClones();
  }

  createClones = () => {
    const clones = (
      React
      .Children
      .map(allChildren, (input) => {
        return React.cloneElement(input,
        { 
          onChange: e => this.handleChange(e, input.props.name),
          value: this.state.cloneValues[input.props.name],
        });
      })
    );

    return clones;
  }

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
      clones.map( clone => { return clone })
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
