import React from 'react';
import PropTypes from 'prop-types';

class SnackBar extends React.Component {
  componentDidMount() {}

  render() {
    const { onClose } = this.props;
    return <div onClose={onClose}>SnackBar Component</div>;
  }
}

SnackBar.propTypes = {
  onClose: PropTypes.func,
};

SnackBar.defaultProps = {
  onClose: () => {},
};

export default SnackBar;
