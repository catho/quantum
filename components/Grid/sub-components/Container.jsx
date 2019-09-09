import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, query, calcGutter } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const renderBreakpoint = (
  { theme: { gutter, breakpoints }, 'no-gutters': noGutters },
  breakpoint,
) => {
  const calculedGutter = CSSVariables({
    theme: {
      gutter: Number(calcGutter(gutter, noGutters, true)),
    },
  }).gutter[breakpoint];
  const q = query(breakpoints)[breakpoint];

  return q`
    padding: ${calculedGutter};
  `;
};

const renderResponsives = ({
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

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  ${renderResponsives}
  ${({ fluid }) => !fluid && 'max-width: 95%;'}
  ${hide}

  & & {
    max-width: 100%;
  }
`;

Container.propTypes = {
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
  }),
  'no-gutters': PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
  'no-gutters': false,
  theme: defaultTheme,
};

Container.displayName = 'Container';

export default Container;
