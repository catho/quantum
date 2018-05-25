import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import icons from '../shared/icons';

const FontIcon = ({
  name,
  skin,
  ...props
}) => (
  <Icon {...props} style={{ color: skin }}>{name}</Icon>
);

FontIcon.defaultProps = {
  style: {},
  skin: '',
};

FontIcon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
};

export default FontIcon;
