import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, hide, noGutters } from './shared';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(-1 * var(--gutter) / 2);

  ${hide}
  ${noGutters}
`;

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  hide: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(BREAKPOINTS)),
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

Row.defaultProps = {
  'no-gutters': false,
};

Row.displayName = 'Row';

export default Row;
