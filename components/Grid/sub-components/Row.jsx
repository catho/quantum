import PropTypes from 'prop-types';
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

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${renderResponsives}
  ${hide}
`;

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(defaultTheme.breakpoints))),
  ]),
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
};

Row.defaultProps = {
  'no-gutters': false,
  theme: defaultTheme,
};

Row.displayName = 'Row';

export default Row;
