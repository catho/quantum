import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hide, noGutters } from './shared';
import { theme as defaultTheme } from '../../shared';

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: var(--gutter);
  flex-wrap: wrap;

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
