import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, query, calcGutter } from './shared';
import { theme as defaultTheme } from '../../shared';
import { CSSVariables } from '../../GlobalStyle';

const renderBreakpoint = (
  {
    theme: { gutter, breakpoints, components },
    'no-gutters': noGutters,
    withBreakpoints,
  },
  breakpoint,
) => {
  const calculedGutter = CSSVariables({
    theme: {
      gutter: Number(calcGutter(gutter, noGutters, true)),
    },
  }).gutter[breakpoint];
  const q = query(breakpoints)[breakpoint];

  const calculedWidth = components.container.breakpoints[breakpoint];

  return q`
    ${withBreakpoints ? `width: ${calculedWidth};` : ''}
    padding: ${calculedGutter};
  `;
};

const renderResponsives = ({
  theme: { breakpoints, gutter, components },
  'no-gutters': noGutters,
  withBreakpoints,
}) =>
  Object.keys(breakpoints).map(breakpoint =>
    renderBreakpoint(
      {
        theme: {
          breakpoints,
          gutter,
          components,
        },
        'no-gutters': noGutters,
        withBreakpoints,
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
  withBreakpoints: PropTypes.bool,
  fluid: PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(defaultTheme.breakpoints)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
    components: PropTypes.object,
  }),
  'no-gutters': PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
  withBreakpoints: false,
  'no-gutters': false,
  theme: defaultTheme,
};

Container.displayName = 'Container';

export default Container;
