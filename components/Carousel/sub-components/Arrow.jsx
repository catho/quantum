import React from 'react';
import Proptypes from 'prop-types';
import Icon from '../../Icon';

const Arrow = props => {
  const { className, onClick, theme, targeting } = props;
  const { colors: themeColors } = theme;
  return (
    <Icon
      name={`keyboard_arrow_${targeting}`}
      skin={themeColors.secondary[700]}
      className={className}
      onClick={onClick}
    />
  );
};

Arrow.defaultProps = {
  className: undefined,
  onClick: () => {},
};

Arrow.propTypes = {
  className: Proptypes.string,
  onClick: Proptypes.func,
  targeting: Proptypes.string.isRequired,
  theme: Proptypes.shape({
    colors: Proptypes.object,
  }).isRequired,
};

export default Arrow;
