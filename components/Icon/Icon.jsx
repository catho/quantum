import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const FontIcon = ({ name, skin, ...props }) => (
  <Icon {...props} style={{ color: skin }}>{name}</Icon>
);

FontIcon.defaultProps = {
  skin: '',
};

FontIcon.propTypes = {
  name: PropTypes.string.isRequired,
  skin: PropTypes.string,
};

export default FontIcon;
