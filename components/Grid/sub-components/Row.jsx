import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { query, hide } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const renderBreakpoint = ({ theme: { gutter, breakpoints } }, breakpoint) => {
  const calculedGutter = CSSVariables({ theme: { gutter } }).gutter[breakpoint];
  const q = query(breakpoints)[breakpoint];

  return q`
    margin-bottom: ${calculedGutter};
  `;
};

const renderResponsives = ({ theme: { breakpoints, gutter } }) =>
  Object.keys(breakpoints).map(breakpoint =>
    renderBreakpoint(
      {
        theme: {
          breakpoints,
          gutter,
        },
      },
      breakpoint,
    ),
  );

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${renderResponsives}
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

    return (
      <StyledRow {...rest}>
        {children.map(child => applyNoGutters(child))}
      </StyledRow>
    );
  }
}

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  children: PropTypes.node.isRequired,
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
