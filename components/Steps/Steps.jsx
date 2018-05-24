import React from 'react';
import PropTypes from 'prop-types';

// For components used only in the Steps Component,
// use the folder 'sub-components' to store them
import Step from './sub-components/Step';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter,
    };

    // To avoid this ...
    // this.incrementCount = this.incrementCount.bind(this);
  }

  // ... we use public class fields
  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      // To render more than one element, use React.Fragment.
      // This will prevent the render method to create additional
      // DOM element
      <React.Fragment>
        <h1>Hello, {this.props.name}{'!'.repeat(this.state.counter)} </h1>
        <button onClick={this.incrementCount}>Increment</button>

        <Step />
      </React.Fragment>
    );
  }
}

// To set a default property, we recommend the use of PropTypes.
// You can find more details here: https://reactjs.org/docs/typechecking-with-proptypes.html
Steps.propTypes = {
  name: PropTypes.string,
  counter: PropTypes.number,
};

// To keep consistency, we set the default props
// using the same way we set the props
Steps.defaultProps = {
  name: 'Steps',
  counter: 0,
};

export default Steps;
