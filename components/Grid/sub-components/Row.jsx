import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, noGutters, query } from './shared';
import { theme as defaultTheme } from '../../shared';

const queryStyle = ({ theme: { breakpoints } }) =>
  Object.entries(breakpoints).map(
    ([name, { columns }]) =>
      query(breakpoints)[name]`
      grid-template-columns: repeat(${columns}, 1fr);
    `,
  );

const Row = styled.div`
  display: grid;
  grid-column-gap: var(--gutter);
  grid-row-gap: var(--gutter);
  margin-bottom: var(--gutter);
  grid-auto-columns: max-content;
  ${queryStyle}

  ${hide}
  ${noGutters}
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
