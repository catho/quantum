import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query } from './shared';
import { theme as defaultTheme } from '../../shared';

const columnPosition = (
  {
    xsmall,
    small = xsmall,
    medium = small,
    large = medium,
    xlarge = large,
    'xsmall-offset': xsmallOffset,
    'small-offset': smallOffset = xsmallOffset,
    'medium-offset': mediumOffset = smallOffset,
    'large-offset': largeOffset = mediumOffset,
    'xlarge-offset': xlargeOffset = largeOffset,
    theme: { breakpoints },
  },
  breakpoint,
) => {
  const q = query(breakpoints)[breakpoint];

  const screenDefinitions = {
    xsmall: {
      size: xsmall,
      offset: xsmallOffset,
    },
    small: {
      size: small,
      offset: smallOffset,
    },
    medium: {
      size: medium,
      offset: mediumOffset,
    },
    large: {
      size: large,
      offset: largeOffset,
    },
    xlarge: {
      size: xlarge,
      offset: xlargeOffset,
    },
  };

  const { size, offset } = screenDefinitions[breakpoint];

  const offsetStyle = offset ? `${offset + 1}/` : '';

  return q`grid-column: ${offsetStyle} span ${size || 12};`;
};

const Col = styled.div`
  ${props =>
    Object.keys(props.theme.breakpoints).map(breakpoint =>
      columnPosition(props, breakpoint),
    )}
  word-break: break-word;
  box-sizing: border-box;
`;

Col.defaultProps = {
  theme: defaultTheme,
};

Col.propTypes = {
  xsmall: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  xlarge: PropTypes.number,
  'xsmall-offset': PropTypes.number,
  'small-offset': PropTypes.number,
  'medium-offset': PropTypes.number,
  'large-offset': PropTypes.number,
  'xlarge-offset': PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(defaultTheme.breakpoints))),
  ]),
};

Col.displayName = 'Col';

export default Col;
