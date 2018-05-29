import React from 'react';
import PropTypes from 'prop-types';

const Popover = ({ name }) => (
  <React.Fragment>
    Hello {name}!
  </React.Fragment>
);

// We recommend the use of PropTypes.
// You can find more details here: https://reactjs.org/docs/typechecking-with-proptypes.html
Popover.propTypes = {
  name: PropTypes.string,
};

// To keep consistency, we set the default props
// using the same way we set the props
Popover.defaultProps = {
  name: 'Popover',
};

export default Popover;
