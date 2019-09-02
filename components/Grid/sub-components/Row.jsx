import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { query, hide, calcGutter } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const renderBreakpoint = (
  { theme: { gutter, breakpoints }, 'no-gutters': noGutters },
  breakpoint,
) => {
  const calculedGutter = calcGutter(
    CSSVariables({ theme: { gutter } }).gutter[breakpoint],
    noGutters,
  );
  const q = query(breakpoints)[breakpoint];

  return q`    
    margin-bottom: ${calculedGutter};
  `;
};

const renderResponsivesGridless = ({
  theme: { breakpoints, gutter },
  'no-gutters': noGutters,
}) =>
  Object.keys(breakpoints).map(breakpoint =>
    renderBreakpoint(
      {
        theme: {
          breakpoints,
          gutter,
        },
        'no-gutters': noGutters,
      },
      breakpoint,
    ),
  );

const renderColsProps = (
  { theme: { breakpoints, gutter }, 'no-gutters': noGutters },
  breakpoint,
) => {
  const calculedGutter = calcGutter(
    CSSVariables({ theme: { gutter } }).gutter[breakpoint],
    noGutters,
  );

  const q = query(breakpoints)[breakpoint];

  return q`
    margin-bottom: ${calculedGutter};
    grid-column-gap: ${calculedGutter};
    grid-row-gap: ${calculedGutter};
  `;
};

const renderResponsivesGrid = ({
  theme: { breakpoints, gutter },
  'no-gutters': noGutters,
}) =>
  Object.keys(breakpoints).map(breakpoint =>
    renderColsProps(
      {
        theme: {
          breakpoints,
          gutter,
        },
        'no-gutters': noGutters,
      },
      breakpoint,
    ),
  );

const queryStyle = ({ theme: { breakpoints } }) =>
  Object.entries(breakpoints).map(
    ([name, { columns }]) =>
      query(breakpoints)[name]`
      grid-template-columns: repeat(${columns}, 1fr);
    `,
  );

const StyledRow = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  ${renderResponsivesGrid}

  @supports ( display: grid ) {
    ${queryStyle}
  }

  @supports not (display: grid) {
    width: 100%;
    display: inline-block;
    ${renderResponsivesGridless}
  }

  ${hide}
`;

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { children, 'no-gutters': noGutters, ...rest } = this.props;

    const applyNoGutters = child => {
      const ChildWithNoGutters = React.cloneElement(child, {
        'no-gutters': child.props['no-gutters'] === true ? true : noGutters,
      });
      return ChildWithNoGutters;
    };

    const applyChildrenProps = c =>
      Array.isArray(c)
        ? c.map(child => applyNoGutters(child))
        : applyNoGutters(c);

    return (
      <StyledRow {...rest} no-gutters={noGutters}>
        {applyChildrenProps(children)}
      </StyledRow>
    );
  }
}

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(defaultTheme.breakpoints))),
  ]),
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
};

Row.defaultProps = {
  hide: null,
  'no-gutters': false,
  theme: defaultTheme,
};

Row.displayName = 'Row';

export default Row;
