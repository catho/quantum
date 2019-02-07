import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BREAKPOINTS, hideCb, noGuttersCb } from './shared';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * calc(var(--gutter) / 2));
  margin-left: calc(-1 * calc(var(--gutter) / 2));

  ${hideCb}
  ${noGuttersCb}
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
