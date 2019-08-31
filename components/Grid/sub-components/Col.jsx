import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, calcGutter } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const columnGrid = ({ size, offset }) => {
  const offsetStyle = offset ? `${offset + 1}/` : '';

  return `grid-column: ${offsetStyle} span ${size || 12};`;
};

const columnGridLess = ({ size, offset, breakpoint, noGutters, gutter }) => {
  const calculedWidth = size ? (100 / 12) * size : 100;
  const calculedOffset = offset ? (100 / 12) * offset : 100;
  const calculedGutter = calcGutter(
    CSSVariables({
      theme: {
        gutter,
      },
    }).gutter[breakpoint],
    noGutters,
    true,
  );

  const offsetStyle = offset
    ? `
    margin-left: calc(${calculedOffset.toFixed(3)}% + ${
        calculedGutter > 0 ? `(${calculedGutter}px / (12 / ${offset})` : `0px`
      } ) );

    &:first-child {
      margin-left: calc(${calculedOffset.toFixed(3)}% + ${
        calculedGutter > 0 ? `(${calculedGutter}px / (12 / ${offset})` : `0px`
      } ) );
    }
    &:last-child {
      margin-right: 0;
    }
  
  `
    : `
    margin-left: ${
      calculedGutter > 0 ? `calc(${calculedGutter}px / 2)` : '0px'
    };
    margin-right: ${
      calculedGutter > 0 ? `calc(${calculedGutter}px / 2)` : '0px'
    };
    
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `;

  const colWidth =
    calculedGutter > 0
      ? `calc(${calculedWidth.toFixed(
          3,
        )}% - ${calculedGutter}px + (${calculedGutter}px / (12 / ${size ||
          12}) ) )`
      : `${calculedWidth.toFixed(3)}%`;

  return `
    display: inline-block;
    width: ${colWidth};

    ${offsetStyle}
  `;
};

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

  return q`
    @supports ( display: grid ) {
      ${columnGrid({
        size,
        offset,
        breakpoint,
      })}
    }

    @supports not ( display: grid ) {
      ${columnGridLess({
        size,
        offset,
        breakpoint,
        noGutters,
        gutter,
      })}
    }
  `;
};

const Col = styled.div`
  ${props =>
    Object.keys(props.theme.breakpoints).map(breakpoint =>
      columnPosition(props, breakpoint),
    )}

  @supports not ( display: grid ) {
    display: inline-block;
  }

  word-break: break-word;
  -webkit-box-sizing: border-box;
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
