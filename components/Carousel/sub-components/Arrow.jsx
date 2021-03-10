import React from 'react';
import Proptypes from 'prop-types';
import Icon from '../../Icon';

const Arrow = props => {
  const { className, onClick, theme, targeting, color } = props;
  const { colors: themeColors } = theme;

  const setColor = (allThemeColors, arrowColor) =>
    allThemeColors[arrowColor][700];

  return (
    <Icon
      name={`keyboard_arrow_${targeting}`}
      skin={setColor(themeColors, color)}
      className={className}
      onClick={onClick}
    />
  );
};

Arrow.defaultProps = {
  className: '',
  onClick: () => {},
};

Arrow.propTypes = {
  className: Proptypes.string,
  onClick: Proptypes.func,
  targeting: Proptypes.string.isRequired,
  color: Proptypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'success',
    'error',
    'neutral',
  ]).isRequired,
  theme: Proptypes.shape({
    colors: Proptypes.object,
  }).isRequired,
};

export default Arrow;
