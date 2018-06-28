import React from 'react';
import PropTypes from 'prop-types';

const Badge = () => <React.Fragment> Badge </React.Fragment>;
Badge.propTypes = {
  skin: PropTypes.oneOf(['primary', 'secondary', 'action', 'cancel', 'modal']),
};
Badge.defaultProps = {
  skin: 'primary',
};
export default Badge;
