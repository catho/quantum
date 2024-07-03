import PropTypes from 'prop-types';
import styled from 'styled-components';
import { query, calcGutter } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const columnGrid = ({ size, offset }) => {
  const offsetStyle = offset ? `${offset + 1}/` : '';

  return `grid-column: ${offsetStyle} span ${size || 12};`;
};

const columnGridLess = ({
  size,
  offset,
  breakpoint,
  noGutters,
  gutter,
  maxColumns,
}) => {
  const calculedWidth = size ? (100 / maxColumns) * size : 100;
  const calculedOffset = offset ? (100 / maxColumns) * offset : 100;
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
      calculedGutter > 0
        ? `(${calculedGutter}px / (${maxColumns} / ${offset})`
        : `0px`
    } ) );

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0;
    }
  
  `
    : `
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
        )}% - ${calculedGutter}px + (${calculedGutter}px / (${maxColumns} / ${
          size || maxColumns
        }) ) )`
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
    'xsmall-offset': xsmallOffset,
    'small-offset': smallOffset = xsmallOffset,
    'medium-offset': mediumOffset = smallOffset,
    'large-offset': largeOffset = mediumOffset,
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
  };

  const { size, offset } = screenDefinitions[breakpoint];
  const maxColumns = breakpoints[breakpoint].columns;
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
        maxColumns,
      })}
    }
  `;
};

const Col = styled.div.attrs(({ 'no-gutters': noGutters, theme, ...rest }) => ({
  'no-gutters': !!noGutters,
  theme: {
    ...defaultTheme,
    ...theme,
  },
  ...rest,
}))`
  ${(props) =>
    Object.keys(props.theme.breakpoints).map((breakpoint) =>
      columnPosition(props, breakpoint),
    )};

  word-break: break-word;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

Col.propTypes = {
  'no-gutters': PropTypes.bool,
  xsmall: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  'xsmall-offset': PropTypes.number,
  'small-offset': PropTypes.number,
  'medium-offset': PropTypes.number,
  'large-offset': PropTypes.number,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(defaultTheme.breakpoints))),
  ]),
};

Col.displayName = 'Col';

export default Col;
