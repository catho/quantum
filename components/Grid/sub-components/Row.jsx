import PropTypes from 'prop-types';
import styled from 'styled-components';
import BREAKPOINTS from './shared/breakpoints';
import { hide } from './shared/media';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-1 * calc(var(--gutter) / 2));
  margin-left: calc(-1 * calc(var(--gutter) / 2));

  ${props => props.hide && [].concat([], props.hide).map(prop => hide[prop]())}
  ${props => props['no-gutters'] && '--gutter: 0px;'};
`;

Row.propTypes = {
  desktop: PropTypes.number,
  large: PropTypes.number,
  hd: PropTypes.number,
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
