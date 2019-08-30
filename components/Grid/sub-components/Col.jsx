import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

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
    theme: { breakpoints, gutter },
    'no-gutters': noGutters,
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

  const calculedWidth = size ? (100 / 12) * size : 100;
  const calculedOffset = offset ? (100 / 12) * offset : 100;
  const calculedGutter = CSSVariables({
    theme: {
      gutter: noGutters ? 0 : gutter,
    },
  }).gutter[breakpoint];

  const offsetStyle = offset
    ? `
    margin-left: calc(${calculedOffset.toFixed(
      3,
    )}% + (${calculedGutter} / (12 / ${offset}) ) );

    &:first-child {
      margin-left: calc(${calculedOffset.toFixed(
        3,
      )}% + (${calculedGutter} / (12 / ${offset}) ) );
    }
    &:last-child {
      margin-right: 0;
    }
  
  `
    : `
    margin-left: calc(${calculedGutter} / 2);
    margin-right: calc(${calculedGutter} / 2);
    content: "gdfgdfg";
    
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `;

  return q`
    width: calc(${calculedWidth.toFixed(
      3,
    )}% - ${calculedGutter} + (${calculedGutter} / (12 / ${size || 12}) ) );

    ${offsetStyle}
  `;
};

const Col = styled.div`
  ${props =>
    Object.keys(props.theme.breakpoints).map(breakpoint =>
      columnPosition(props, breakpoint),
    )}

  display: inline-block;
  box-sizing: content-box;
  word-break: break-word;
  box-sizing: border-box;
`;

Col.defaultProps = {
  theme: defaultTheme,
  'no-gutters': false,
};

Col.propTypes = {
  'no-gutters': PropTypes.bool,
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
