import React from 'react';
import PropTypes from 'prop-types';
import { Tip, TipText } from '../Tooltip/styles';
import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const CustomThumb = props => {
  console.log(props);
  const { children, value, theme } = props;
  return (
    <Tip theme={theme}>
      <TipText>{value}</TipText>
      {children}
    </Tip>
  );
};

CustomThumb.propTypes = {
  value: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

CustomThumb.defaultProps = {
  theme: {
    spacing,
    colors,
    baseFontSize: defaultBaseFontSize,
  },
};

export default CustomThumb;
