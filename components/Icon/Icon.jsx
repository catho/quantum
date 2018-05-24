import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';

const FontIcon = ({ name, ...props }) => <Icon {...props}>{name}</Icon>;

FontIcon.propTypes = { name: PropTypes.string.isRequired };

export default FontIcon;
