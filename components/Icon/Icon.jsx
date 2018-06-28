import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material-ui/core/Icon';
import icons from '../shared/icons';

const Icon = ({ name, skin, ...props }) => (
  <MaterialIcon {...props} style={{ color: skin }}>
    {name}
  </MaterialIcon>
);

Icon.defaultProps = {
  style: {},
  skin: '',
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
};

export default Icon;
