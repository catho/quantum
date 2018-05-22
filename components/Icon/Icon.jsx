import React from 'react';
import PropTypes from 'prop-types';

const formatIconName = (name) => {
  if (['3d_rotation', '3d-rotation'].includes(name)) return 'ThreeDRotation';

  return name && name
    .split(/[_-]/)
    .map(s => s.replace(/^./, s[0].toUpperCase()))
    .join('');
};

const Icon = ({ name, ...props }) => {
  /* eslint-disable import/no-dynamic-require, global-require */
  const IconClass = require(`@material-ui/icons/${formatIconName(name) || 'Error'}`).default;

  return <IconClass {...props} />;
};

Icon.propTypes = { name: PropTypes.string.isRequired };

export default Icon;

